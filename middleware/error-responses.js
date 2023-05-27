module.exports = errorResonses = (err,req,res) =>{
    return res.json({
        statusCode:401,
        isSuccess:false,
        message:err.message
    })
}