const mongoose = require('mongoose')
const user = require('./user')
const Schema = mongoose.Schema;



const vendschema = user.discriminator('vendeur',new mongoose.Schema({
    image:{
        type :String,
      
    }

})

    
      


);

 module.exports =vendschema;
