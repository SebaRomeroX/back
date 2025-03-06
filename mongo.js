const mongoose = require('mongoose')

const conectionString = process.env.MONGO_DB_URI

mongoose.connect(conectionString)
    .then(() => {
        console.log('DataBase conectada')        
    }).catch(err => {
        console.log(err)       
    })



