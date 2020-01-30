const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const catschema = mongoose.model('categorie',new mongoose.Schema({
    nom:{
        type:String,
        required:true, // champ obligatoire
        trim :true
    },
    souscategorie :[{

        type:mongoose.Schema.Types.ObjectId,
        ref : 'sous-categorie'
    }]




    
}));
module.exports = catschema;
