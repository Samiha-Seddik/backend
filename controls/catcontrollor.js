const catmodel = require('../models/categorie');
module.exports = {
    
    addcat : function(req,res){
        const categorie = new catmodel({
            
            nom :req.body.nom,
            souscategorie : req.body.souscategorie,
            
        })
        categorie.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok', msg:'categorie ajoutée'})
            }

        })
    },
    getall : function(req,res){
        catmodel.find({}).populate({
            path:'souscategorie',
            populate:{
                path:'produit'}})
        .exec(function(err,c){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(c)
            }
        })
    },
    getid : function(req,res){
        catmodel.findOne({_id:req.params.id}).populate({
            path:'souscategorie',
            populate:{
                path :'produit'
            }})

         .exec(function(err,c){
            if(err){
                res.json({state:'no',msg:'error'})
            }
            else{
                res.json(c)
            }
        })
    },
    deleteone : function(req,res){
        catmodel.remove({_id:req.params.id},function(err,p){
             if(err){
                 res.json({state:'no', msg:'error'})
             }
             else{
                 res.json({state:'ok', msg:'deleted'})
             }
         })
         },

    updateone : function(req,res){
             catmodel.updateOne({_id:req.params.id},{$set:req.body},
                {
                  nom :req.body.nom ,
                },
                function(err){
                    if(err){
                        res.json({state : 'no' , msg : 'error'})
                    }
                    else{
                        res.json({state : 'ok' , msg : 'updated categorie'})
                    }
                }
                )
         },


    Push: function (req, res) {
            catmodel.updateOne({_id: req.params.id},
              {$push:{souscategorie: req.body.souscategorie}}, function (err) {
        
              if (err) {
                res.json({state: ' no ', msg: 'error'})
        
              }
        
              else {
                res.json({state: 'ok', msg: 'pushed'})
        
        
              }
            })
        
        
          },
         
}