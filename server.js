
const express = require("express") //importation du module
const bodyParser = require("body-parser") // lire les données dans le body
const BD = require('./models/db');

const userrouter = require('./routers/userrouter');
const prodrouter = require('./routers/prodrouter');
const catrouter = require('./routers/catrouter');
const souscatrouter = require('./routers/souscatrouter');
const vendeur = require('./routers/vendeurRtr');
const acheteur = require('./routers/acheteurRtr');



const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app est un middleware ou objet contient plusieurs fonctions et methodes offert par le modele express



app.use(bodyParser.json())

app.set('secretKey', 'test');

app.use('/user',userrouter);
app.use('/produit',prodrouter);
app.use('/categorie',catrouter);
app.use('/souscategoriemodel',souscatrouter);
app.use('/vendeur',vendeur);
app.use('/acheteur',acheteur);




app.listen(3010, function(){    // ecout du serveur
    console.log("Welcome")
});