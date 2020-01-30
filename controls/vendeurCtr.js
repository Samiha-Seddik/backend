const vendmodel = require('../models/vendeur');
var fs = require('fs');
const multer = require('multer');
const upload = multer({dest:__dirname + '/uploads/images'});

module.exports = {

    Add: function (req, res) {             //adding image in adding vendeur
        var file = __dirname + '/uploads/images/' + req.file.originalname; //dirname:creation du dossier de destination
        fs.readFile(req.file.path, function (err, data) {
          fs.writeFile(file, data, function (err) {
            if (err) {
    
              console.error(err);
              var response = {
                message: 'sorry file couldnt upload',
                filename: req.file.originalname
              };
            }
            else {
              const vendeur = new vendmodel({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: req.body.password,
                //Adresse: req.body.Adresse,
                image: req.file.originalname
              });
              vendeur.save(function (err) {
                if (err) {
    
    
                  res.json({state: 'no', msg: 'erreur' + err})
    
                }
                else {
    
                  res.json({state: 'ok ', msg: 'vendeur added'})
                }
              })
            }
          })
        })
      },
    getFile : function(req,res){
        res.sendFile(__dirname + '/uploads/images/' + req.params.image)
    },
    getall : function(req,res){
        vendmodel.find({},function(err,list){
            if(err){
                res.json({state : 'no' , msg : 'error'})
            }
            else{
                res.json(list)
            }
        })
    },
    
    getone : function(req,res){
        vendmodel.findOne({_id:req.params.id},function(err,one){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json(one)
            }
        })
    },

    delone : function(req,res){
        vendmodel.remove({_id:req.params.id},function(err,del){
            if(err){
                res.json({state : 'no', msg : 'error'})
            }
            else{
                res.json(del)
            }
        })
    },

    updateone : function(req,res){
        vendmodel.update({_id:req.params.id},{$set:req.body},
            {
                nom : req.body.nom,
                prenom : req.body.prenom,
                email : req.body.email,
                password : req.body.password
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
    

        
    


    
}
