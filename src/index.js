const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 4987
app.use(express.json())
const connect = require("./configs/db")

const {register,login} = require ("./controllers/auth.controller")

app.post("/register",register)
app.post ("/login",login)


// const userController = require ("./controllers/user.controller")
// const postController = require("./controllers/post.controller");

// app.use("/post", postController);
// app.use ("users",userController)

app.listen(port,async function (req,res){
    try{
        connect();
        console.log ("Listening Port 4987 ")
    }catch(err){
        console.log(err.message)
    }
})