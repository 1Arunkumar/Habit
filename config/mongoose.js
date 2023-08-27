const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/habit_2';

mongoose.connect(URL)
.then(()=>console.log('MongoDb Is Up And Connected '))
.catch((error)=>console.log('error connected in Db',error));

const db = mongoose.connection;
module.exports= db;