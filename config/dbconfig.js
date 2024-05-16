const mongoose = require('mongoose');

connect = mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () =>{
    console.log('mongoDb is connected');
});
connection.on('Error', (error)=>{
    console.log('Error in mongoDB connection')
});

module.exports = mongoose;