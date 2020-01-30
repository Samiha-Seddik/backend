
const achmodel = require('../models/acheteurmodel')

module.exports = {

    addacheteur : function(req,res){
            const acheteur = new achmodel({
    nom : req.body.nom,
    prenom : req.body.prenom,
    email : req.body.email,
    password : req.body.password,
    phonenumber:req.body.phonenumber,
    cin:req.body.cin
            })

            acheteur.save(function(err){
                if(err){
                    res.json({state : 'no' , msg :'error'})
                }
                else{
                    res.json({state : 'ok' , msg :'acheteur added'})
                }
            })

    },
    getall : function(req,res){
        achmodel.find({},function(err,list){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json(list)
            }
        })

    },
    getone : function(req,res){
        achmodel.findOne({_id:req.params.id},function(err,one){
            if(err){
                res.json({state : 'no', state : 'error'})
            }
            else{
                res.json(one)
            }
        })
    },
    delone : function(req,res){
        achmodel.remove({_id:req.params.id},function(err,del){
            if(err){
                res.json({state : 'no' , msg : 'error'})
            }
            else{
                res.json(del)
            }
        })
    },
    updateone : function(req,res){
        achmodel.updateOne({_id:req.params.id},{$set:req.body},
           { nom : req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            password : req.body.password,
            phonenumber:req.body.phonenumber,
            cin:req.body.cin

        },
        function(err){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json({state : 'ok', msg : 'updated acheteur'})
            }
        }
        
        )
            
        
        }
}