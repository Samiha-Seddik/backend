var mongoose = require ('mongoose');

var mongoDB = 'mongodb://127.0.0.1/mydb';
mongoose.connect(mongoDB,{ useNewUrlParser: true , useUnifiedTopology: true} );



mongoose.Promise = global.Promise;
// console.log("promise: ", mongoose.Promise);
//node async donc yebloki tt les instructions yexecuti lmongod apres ykamml
var DB = mongoose.connection ;
DB.on('error',console.error.bind(console,'MongoDB connection error:'));