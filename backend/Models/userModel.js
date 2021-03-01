import mongoose from 'mongoose'
 const {Schema}=mongoose

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true,
        unique:true
    },
      password:{
        type:String,
        required:true
    },
      isAdmin:{
        type:Boolean,
        required:true,
        Default:false
    },
},{
    timestamps:true
}) 
const User=mongoose.Model('User',userSchema)
export default User;
