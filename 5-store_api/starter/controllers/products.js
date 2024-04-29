const Product = require("../models/product")

const getAllProductsStatic = async (req, res) => {
    // throw new Error("testing async errors").
    const products = await Product.find({ price: { $gt: 30 } }).select("name price")
    res.status(200).json({
        products,
        nHits: products.length,
    })
    // res.status(200).json({msg:"product testing route"})
}
const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, feilds, numericFilters } = req.query;
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }
    // console.log(queryObject);
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        console.log(numericFilters);
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        // console.log(queryObject);
        const options = ['price','rating'];
        filters = filters.split(',').forEach((item) => {
            const [feild,operator,value] = item.split('-')
            if(options.includes(feild)){
            queryObject[feild]={[operator]:Number(value)} 
            }
        });
    }
console.log(queryObject);



    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(" ");
        result = result.sort(sortList)
        console.log(sortList);
    }
    // else{
    //     result = result.sort(createdAt)
    // }

    if (feilds) {
        const feildList = feilds.split(',').join(" ");
        result = result.select(feildList)
        // console.log(sortList); 
    }


    const products = await result
    // console.log(result);
    res.status(200).json({
        nHits: products.length,
        products,
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
