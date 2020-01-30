const mongoose = require('mongoose')

const user = require('./user')

const Schema = mongoose.Schema

const achetschema = user.discriminator('acheteur', new mongoose.Schema({
    
    phonenumber:{
        type:Number,
        required:true,
        trim:true
    },
    cin:{
        type:Number,
        required:true,
        trim:true
    }

}));
module.exports = achetschema;