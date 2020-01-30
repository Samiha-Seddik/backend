const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// mettre les attributs comme les tables dans la db

const prodschema = mongoose.model('produit',new mongoose.Schema({
prix:{
    type:Number,
    required:true
},
nom:{
    type:String,
    required:true,
    trim:true
},
image:{
    type:String,
    required:true
},
description:{
    type:String,
    
},
    




}));
module.exports = prodschema;