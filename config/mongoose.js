const mongoose = require('mongoose');
const URL = 'mongodb+srv://arun:NtzLgLyks7iuzCvp@cluster0.1vzl8mv.mongodb.net/habit_2';
mongoose.connect(URL)
.then(()=>console.log('MongoDb Is Up And Connected '))
.catch((error)=>console.log('error connected in Db',error));

const db = mongoose.connection;
module.exports= db;
