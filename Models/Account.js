const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema({
    
  initialBalance: String,
  name:String
})

const Account = mongoose.model("account",accountSchema)

module.exports = Account