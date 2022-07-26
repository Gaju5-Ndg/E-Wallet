const Account = require("../Models/Account")


class accountController{
     static sendAmount(req,res){
         try {
             
             const send = await Account.create({
                  name:req.body,
                  initialBalance:req.body.initialBalance
             })
             return res.status(200).json({message:"money sent successfull",send})
         } catch (error) {
             return res.status(400).json({error:error.message})
         }

     }

     static receiveAmount(req,res){
         try {
             const id = req.params._id
             const recieve = await Account.findById(id)
             
         } catch (error) {
             
         }
     }
}

module.exports = accountController