const mongoose=require("mongoose")
// mongoose.connect("mongodb://localhost:27017/blogAPI")
const MONGODB=process.env.MONGODB
mongoose.connect(MONGODB)
.then(()=>console.log("*DB Connected*"))
.catch((err)=>console.log("*DB Not Connected",err))