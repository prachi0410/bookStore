import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup = async(req,res)=>{
        try {
               const {name,email,password,cpassword} = req.body;
               const user = await User.findOne({email})
               if(user){
                return res.status(400).json({message:"User alredy exist"})
               }
               else if(password != cpassword){
                return res.status(422).json({error:'Password not matching'});
               }
               const hashPassword = await bcryptjs.hash(password,10);
               const hashcPassword = await bcryptjs.hash(cpassword,10);
               const createUser = new User({
                 name,
                 email,
                 password : hashPassword,
                 cpassword : hashcPassword
               })
               await createUser.save()
               res.status(201).json({message:"User created successfully",user:{
                   _id:createUser._id,
                   name:createUser.name,
                   email:createUser.email,
               }});
        } catch (error) {
                console.log("Error",error.message);
                res.status(500).json({message:"Internal server error"});
        }
};

export const login = async(req,res)=>{
        try {
                const {email,password} = req.body;
                const user = await User.findOne({email});
                if(!user){
                        return res.status(400).json({message:"Invalid user credentials"}) 
                }
                else{
                        const isMatch = await bcryptjs.compare(password,user.password);
                        if(!isMatch){
                                return res.status(400).json({message:"Invalid password"})
                        }
                
                        else{
                                res.status(200).json({message:"Login successful",user:{
                                        _id:user._id,
                                        name:user.name,
                                        email:user.email
                                }})    
                        }
                }
        } catch (error) {
              console.log("Error: "+ error.message);  
              res.status(500).json({message:"Internal server error"});
        }
}