const prodmodel = require('../models/produit');
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest : __dirname + '/uploads/images'})
module.exports = {

 addprod : function(req,res){

var file = (__dirname +'/uploads/images/'+ req.file.originalname)
fs.readFile(req.file.path, function(err,data){
    fs.writeFile(file,data, function(err){
        if(err){
            console.error(err)
            var response = {
                message: 'sorry file couldnt upload',
                filename: req.file.originalname
              }; 
        }

        const produit = new  prodmodel({
            prix :req.body.prix,
            nom :req.body.nom,
            image :req.file.originalname,
            description :req.body.description,
        })
        produit.save(function(err){
            if(err){
                
                res.json({state:'no',msg:'error'})
            }
            else{
                res.json({state:'ok', msg:'added product'})
            }

        })
        
    })
})

       

 },

 upload : function(req,res){
    var file = (__dirname +'/uploads/images/'+ req.file.originalname)
    fs.readFile(req.file.path, function(err){
        fs.writeFile(file, function(err){

            if(err){
                res.json({message: 'sorry file couldnt upload',})
              
            }
            else{
                res.json({message: 'uploaded'})
            }
            
                  }
        )},
    )},

 getFile : function(req,res){
    res.sendFile(__dirname + '/uploads/images/' + req.params.image)
},
getall : function(req,res){
prodmodel.find({},function(err,p){
    if(err){
        res.json({state:'no',msg:'vous avez un erreur'})// state:cle et no:valeur
    }
    else{
        res.json(p)
    }
})


},

get_id : function(req,res){
    prodmodel.findOne({_id:req.params.id},function(err,p){
        if(err){
            res.json({state:'no',msg:'error'})
        }
        else{
            res.json(p)
        }
    })
},

deleteone : function(req,res){
   prodmodel.remove({_id:req.params.id},function(err,p){
        if(err){
            res.json({state:'no', msg:'error'})
        }
        else{
            res.json({state:'ok', msg:'deleted'})
        }
    })
 },
    
 updateone : function(req,res){
        prodmodel.updateOne({_id:req.params.id},{$set:req.body},
           { prix :req.body.prix,
            nom :req.body.nom,
            image :req.body.image,
            description :req.body.description,
        },
        function(err){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json({state : 'ok', msg : 'updated product '})
            }
        }
        
        )
 }
    
}