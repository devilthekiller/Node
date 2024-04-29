

const login = async (req, res)=>{
    res.send("Fake login/register/signup route")
}

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello , john doe  `,  
    secret:`here is your authorised data , your lucky num is ${luckyNumber}`})
}

module.exports= {
    login, dashboard
}