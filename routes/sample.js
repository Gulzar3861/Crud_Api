const express =require("express")
const routes = express.Router()

const controllers = require("../controllers/userControllers")

routes.get("/get",(req,res)=>{
    return controllers.user.get(req,res)
})
routes.post("/add",(req,res)=>{
    return controllers.user.add(req,res)
})
routes.put("/update",(req,res)=>{
    return controllers.user.update(req,res)
})
routes.delete("/delete",(req,res)=>{
    return controllers.user.delete(req,res)
})

module.exports = routes