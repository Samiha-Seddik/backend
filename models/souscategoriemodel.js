const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// mettre les attributs comme les tables dans la db
const sousscatchema = mongoose.model('sous-categorie',new mongoose.Schema({

nom : {
    type : String,
    required : true,
    trim : true
},

produit :[{
    type:mongoose.Schema.Types.ObjectId,
    ref : 'produit'
}]

}))


module.exports = sousscatchema;