const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    clientId:{
        type: String,
        unique:true,
        trim:true,
        maxlength:6
    },
    clientName: {
        type:String,
        required:[true,'Please enter a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name cannot be more than 50 characters']
    },
    clientDesc:{
        type:String,
        required:true,
        trim:true,
        maxlength:[500,'Name cannot be more than characters']
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    gpsAddress:{
        type:String,
        required:true,
        trim:true
    },
    billing:{
        type:[String],
        required:true,
        trim:true,
        enum:['WEEKLY', 'MONTHLY','YEARLY']
    },
    clientPhone:{
        type:String,
        maxlength:[10,'Phone number cannot be longer than 10 characters']
    },
    email:{
        type:String,
        match:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please add a valid email'],
        required:true
    },
    serviceType:{
        type: [String],
        required:true,
        enum:['RMS','PASTEL','POS']
    },
    supportPerson:{
        type:[String],
        required:true,
        enum:['OTENG', 'STEVE','ABASS']
    },
    photo:{
        type: String,
        default:'no-photo.jpg'
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    address_add:{
        type: String
    },
    total:{
        type:Number,
        default: 0
    }

})


ClientSchema.pre('save', function(next){
   this.address_add = `${this.gps_address}`;
   next();

})


module.exports = mongoose.model('Client', ClientSchema)