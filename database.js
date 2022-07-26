const mongoose = require("mongoose")


const database = async()=>{
    const dbUrl = "mongodb+srv://Gaju:le5102000@cluster0.5u1vx.mongodb.net/wallete?retryWrites=true&w=majority"

     await mongoose.connect(dbUrl,{useNewUrlParser: true})
     .then(()=>console.log("database connected successfully"))
     .catch(error=>{
         console.log(error)
     })
}
 module.exports = database