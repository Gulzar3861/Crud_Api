const successResponses = (res,extraParams=null)=>{
    const resObject = {
        statusCode:200,
        isSuucess:true
    }
    appendExtraData(resObject,extraParams)
    return res.json(resObject)
}
const badResponses = (res,extraParams=null)=>{
    const resObject = {
        statusCode:400,
        isSuucess:false
    }
    appendExtraData(resObject,extraParams)
    return res.json(resObject)
}

const appendExtraData = (res,extraParams=null) => {
    if(extraParams){
       Object.keys(extraParams).map(x => res[x]=extraParams[x])
    }
}

module.exports = {
    successResponses:successResponses,
    badResponses:badResponses
}