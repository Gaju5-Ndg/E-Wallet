const verify =  require("../middleware/jwt")

const verifyToken =(req,res,next)=>{

    const token = req.headers.authorization
    const user = verify(token)
    if(!user){
        return res.status(400).json("you dont have access")
    }
     return next()
}
module.exports = verifyToken