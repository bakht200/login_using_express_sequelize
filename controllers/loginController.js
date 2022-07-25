const db = require('../model/index');
const jwt = require('jsonwebtoken');


///Create Main Model


const Login = db.users


//MAIN WORK//


const addUser = async (req,res) => {
     const user = await Login.findOne({ where : {email : req.body.email }});
   
     if(user){
  res.status(400).json({message:"Email exist"});

     }
     else if(req.body.password.length<8){
  res.status(400).json({message:"Invalid password"});

     }
     else{
   var usr = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    password :  req.body.password
  };
  created_user = await Login.create(usr);
  res.status(200).json(created_user);
}
}

const fetchUser = async (req,res) => {
  
    const user = await Login.findOne({ where : {email : req.body.email }});
 if(user){
    const password_valid = (req.body.password==user.password);
  
    if(password_valid){
       var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      
       res.status(200).json({ response:{token : token ,message:"LoginSuccessfull"} , user:user });
    } else {
      res.status(400).json({ error : "Password Incorrect" });
     }
  
  }else{
    res.status(404).json({ error : "User does not exist" });
  }
}


// const fetchAllUsers = async (req,res)=>{
//     try {
//     let token = req.headers['authorization'].split(" ")[1];
  
//     const  decoded=jwt.verify(token, 'shhhhh');
//      req.user = decoded;
//     next();
//   } catch(err){
//     res.status(401).json({"msg":"Couldnt Authenticate"});
//   }
// }
module.exports={
    addUser,
    fetchUser,

}