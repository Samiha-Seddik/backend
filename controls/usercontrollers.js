const usermodel= require('../models/user');
const bcrypt = require ('bcryptjs') ;  //appel de module user
const jwt = require('jsonwebtoken')

module.exports = {

adduser : function(req,res){
            const user = new usermodel({
    nom : req.body.nom,
    prenom : req.body.prenom,
    email : req.body.email,
    password : req.body.password,
})
user.save(function(err){    // enregistrement ds la BD
if (err){

    res.json({state:'no', msg:'vous avez un erreur'})
}
else{
    res.json({state:'ok', msg:'utilisateur ajoutée'})  
}
}) 


    },
getall : function(req,res){
        usermodel.find({}, function(err,list){
if(err){
    res.json({state:'no',msg:'vous avez un erreur'})

}
else{
    res.json(list)
}


        })
    },
getone : function(req,res){
        usermodel.findOne({_id:req.params.id},function(err,u){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(u)
            }
        })
    },

deleteone : function(req,res){
usermodel.remove({_id:req.params.id},function(err,d){
    if(err){
        res.json({state:'no', msg:'error'})
    }
    else{
        res.json({state:'ok', msg:'deleted'})
    }
})
},
updateone : function(req,res){
usermodel.updateOne({_id:req.params.id},{$set:req.body},
   { nom : req.body.nom,
    prenom : req.body.prenom,
    email : req.body.email,
    password : req.body.password
},
function(err){
    if(err){

        res.json({state : 'no', msg : 'error'})
    }
    else{
        res.json({state : 'ok', msg : 'updated user'})
    }
}

)
    

},
authent : function (req,res){
 
usermodel.findOne({email:req.body.email}, function(err,userinfo){

    if(err){
        console.log(err)
    }
    else{
        console.log(userinfo)

        if(bcrypt.compare(req.body.password, userinfo.password)){

            const token = jwt.sign({id:userinfo._id},
                 req.app.get('secretKey'),{expiresIn:'1h'});

            res.json({status:'sucsess',message :'user found',
            data : {user : userinfo, token : token}});
            
        }
        else{
            res.json({status : 'error',message:'invalid email or pwd',data : null})
        }
    }})

}         

}      
    
    