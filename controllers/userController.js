const User = require("../Models/user")
const Account = require("../Models/Account")
const {sign} = require("../middleware/jwt")
const bcrypt = require("bcryptjs")

class userController {

    static async createUser(req,res){
        try {
            const salt = await bcrypt.genSaltSync(8)
            const hashPassword = await bcrypt.hash(req.body.password, salt)
             req.body.password = hashPassword
            const user = await User.create({
                email:req.body.email,
                password: hashPassword
            })
            if(!user){
              res.status(404).json("you have to register")  
            }
            let initialBalance = req.body
            let account = new Account(initialBalance)
            account = "1000"
            await account.save()
            
           return res.status(200).json({message:"user created!"})

        } catch (error) {
            console.log(error)
            return res.status(404).json(error.error)
        }
    }

    static async loginUser(req, res){
        const user = await Patient.findOne({
          email: req.body.email,
        });
    
        if (!user) {
          return res.status(404).json({
            error: "user not found! kindly register first",
          });
        }
        if (bcrypt.compare(req.body.password, user.password)) {
          user.password = null;
          const token = sign({ user: user });
          return res.status(200).json({
            message: "successfully logged in",
            token: token,
            user: user,
          });
        }
}

}

module.exports =userController