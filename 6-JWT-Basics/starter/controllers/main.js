const { use } = require('express/lib/router');
const { BadRequest } = require('../errors')
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequest('pls provide username and password')
    }
    console.log(username, password);
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user created ', token })
    // res.send("Fake login/register/signup route") 
}

const dashboard = async (req, res) => {
    console.log(req.user);
    // console.log(req.headers);
    
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello , ${req.user.username}  `,
        secret: `here is your authorised data , your lucky num is ${luckyNumber}`
    })
    
    // console.log(token);
}

module.exports = {
    login, dashboard
} 