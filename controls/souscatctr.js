const souscatmodel = require('../models/souscategoriemodel')
module.exports = {
    addscat : function(req,res){
        const souscat =  new souscatmodel({
         
            nom :req.body.nom,
            produit:req.body.produit,
          
        })
        souscat.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok', msg:'souscat ajoutée'})
            }

        })

    },

    getall : function(req,res){
        souscatmodel.find({}).populate('produit').exec(function(err,list){
            if(err){

                console.log(err)
                res.json({state : 'no' , msg : 'error'})
            }
            else{
                res.json(list)
            }
        })
    },
    getone : function(req,res){
        souscatmodel.findOne({_id:req.params.id}).populate('produit')
        .exec(function(err,one){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json(one)
            }
        })
    },

    delone : function(req,res){
        souscatmodel.remove({_id:req.params.id},function(err,del){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json(del)
            }
        })
    },

    updateone : function(req,res){
        souscatmodel.update({_id:req.params.id},{$set:req.body},
            {
                nom : req.body.nom,
                produit:req.body.produit,
            },
            function(err){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json({state : 'ok', msg : 'updated'})
            }
        })
    },

   

    Push: function (req, res) {
        souscatmodel.updateOne({_id: req.params.id},
          {$push:{produit: req.body.produit}}, function (err) {
    
          if (err) {
            res.json({state: ' no ', msg: 'ID not found'})
    
          }
    
          else {
            res.json({state: 'ok', msg: 'child category updated'})
    
    
          }
        })
    
    
      },


}

