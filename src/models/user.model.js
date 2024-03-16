"use strict"
const mongoose=require("mongoose")
// call password func.
const passwordEncrypt=require("../helpers/passwordEncrypt")


//Schema
const UserSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            trim:true,
            //required:true,
            unique:true,
            required:[true,"Email must be required"],
            validate:[
                (email)=>(email.includes("@")&& email.includes(".")),
                "Email type is incorrect"
            ]
        },
        password:{
            type:String,
            trim:true,
            required:true,
            set:(password)=>passwordEncrypt(password)
           
        },
        firstName:String,
        lastName:String
    },
    {
        collection:"user",
        timestamps: true

    })

    module.exports=mongoose.model("User",UserSchema)