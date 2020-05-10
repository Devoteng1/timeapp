const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');


//Load env vars
dotenv.config({path:'./config/config.env'});

//load models
const Clients = require('./models/Client');

mongoose.connect(`mongodb://localhost:27017/TimeApp`,{
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false,
     useUnifiedTopology: true
 });

 //Read JSON files
 const clients = JSON.parse(fs.readFileSync(`${__dirname}/_data/clients.json`, 'utf-8'))

 //Import into DB
 const importData = async () => {
     try{
         await Clients.create(clients);
         console.log('Data imported'.green.inverse)
         process.exit();
     }catch(err){
       console.error(err);
     }
 }

 //delete DATA DB
 const deleteData = async () => {
    try{
        await Clients.deleteMany(clients);
        console.log('Data destroyed'.red.inverse)
        process.exit();
    }catch(err){
      console.error(err);
    }
}

if(process.argv[2] === '-1'){
    importData();
}else if(process.argv[2] === '-d'){
    deleteData();
}