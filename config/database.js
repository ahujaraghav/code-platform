const mongoose = require('mongoose')
//DB configuration
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/codeplatform', { useNewUrlParser: true })
    .then(function(){
        console.log('connected to database')
    })
    .catch(function(){
        console.log('OOPS!!! Something went wrong in database connection')
    })
module.exports = {
    mongoose
}