// const { rejects } = require('assert')
const { readFile, writeFile } = require('fs')
// const { resolve } = require('path')
const util  = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



const start = async () => {
    try {
        const first = await readFilePromise("./2-sayhi.js", 'utf-8')
        const second = await readFilePromise("./1-names.js", 'utf-8')
        console.log(first);
        console.log("--------------------------------------------------");
        console.log(second);

    } catch (error) {
        console.log(error);
    }
}


start();
















// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile("./2-sayhi.js", 'utf-8', (err, data) => {
//             if (err) {
//                 // console.log(err);
//                 reject(err)
//             }
//             else {
//                 resolve(data);
//                 // console.log(data);
//             }
//         })
//     })
// }