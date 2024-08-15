const userModel = require("../models/userModel");
const { hashPassword } = require("../utills/hashPassword");

const signup = async (req, res) => {
    console.log(req.body);
    const {username, email, password} = req.body;
    try{

        const user = await userModel.findOne({email});

        if(user) {
            res.status(400).json({message : "You are already register try to login."});
        }else {
            const hashedPassword = await hashPassword(password);

            await userModel.create({username, email, password : hashedPassword});

            res.status(201).json({ message: "Signup successfully!" });
        }

    }catch(err) {
        res.status(500).json({message : "Internal server error..."});
    }
}

const login = async (req, res) => {
    try{

    }catch(err) {
        res.status(500).json({message : "Internal server error..."});
    }
}

const logout = async (req, res) => {
    try{

    }catch(err) {
        res.status(500).json({message : "Internal server error..."});
    }
}

module.exports = {signup, login, logout};