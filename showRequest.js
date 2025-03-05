
const showRequest = ((req, res, next) =>{
    console.log('request :') 
    console.log(req.method)    
    console.log(req.path)    
    console.log(req.body)    
    console.log('---------')    
    next()
})

module.exports = showRequest