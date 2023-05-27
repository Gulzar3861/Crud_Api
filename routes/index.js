const express =require("express")
const routes = express.Router()

const sample = require("./sample")
routes.use("/sample",sample)

module.exports = routes