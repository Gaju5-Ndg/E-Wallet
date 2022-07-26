const express = require("express");
const database = require("./database")
const userRouter = require("./Routes/userRoute")

const app = express()

app.use(express.json())

app.use('/user',userRouter)

const port = 5000
database()
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})