const userModel = require("../model/userModel")
var bcrypt = require('bcryptjs');

exports.signup = async (req,res) =>{
   try{
    let { email, pwd, fullName } = req.body;

    let emailCon = await userModel.findOne({ email: email });
    if (emailCon) {
      return res.status(400).json({
        success: false,
        msg: "Email already exist"
      })
    }
    bcrypt.genSalt(12, function (err, salt) {
        bcrypt.hash(pwd, salt, async function (err, hash) {
  
          let user = await userModel.create({
            email: email,
            password: hash,
            fullName: fullName
          });
  
          return res.status(200).json({
            success: true,
            msg: "User created successfully",
          });
  
        });
      });

   }
   catch{
    res.status(500).json({
        success:false,
        msg:error.message
    })
   }
};