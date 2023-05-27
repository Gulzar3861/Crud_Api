const express = require("express")
const app = express()
const swaggerUi = require("swagger-ui-express")
const swaggerJSON = require("./swagger/swagger.json")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 8080

require("./config/db")

const routes = require("./routes/index")

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerJSON))

app.use("/api",routes)

app.listen(PORT,() =>{
    console.log(`App running on http://localhost:${PORT}`)
})