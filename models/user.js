const mongoose = require ('mongoose');
const Schema = mongoose.Schema; // equivalent du classe ds SQL
const bcrypt = require ('bcryptjs') ;
// il faut installer le module bcrypt(npm install bcrypt):pour le cryptage et le decryptage du pwd
// mettre les attributs comme les tables dans la db
const userschema = mongoose.model('user',new mongoose.Schema({
    nom:{
        type:String,
        required:true, // champ obligatoire
        trim :true
    },
    prenom:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
       
        trim:true
    },
    password:{
    type:String,
       
    },
  

})

.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password,10);
    next();
    
    
}));

 module.exports = userschema;
