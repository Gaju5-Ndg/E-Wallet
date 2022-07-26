const jwt = require("jsonwebtoken")

const sign = async(data)=> await jwt.sign(data,"wallete",{expiresIn:"12h"})
const verify = async (data) => await jwt.verify(data,"wallete")

module.exports ={sign ,verify}