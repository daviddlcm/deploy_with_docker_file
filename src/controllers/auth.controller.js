const User = require("../models/user.model")


const signIn = async (req,res) => {
    const userFound = await User.findUsername(req.body.user_name);
    if(!userFound){
        return res.status(404).json({message: "User not found"});
    }

    const passwordMatch = req.body.password === userFound.password;
    if(!passwordMatch){
        return res.status(401).json({message: "Invalid password"});
    }

    return res.status(200).json({
        message:"User signed in successfully",
        user: userFound
    })
}

module.exports ={
    signIn
}