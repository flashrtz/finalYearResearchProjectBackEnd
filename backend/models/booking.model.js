const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    numberOfGuests:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    nameOfEvent:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    locationOfEvent:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    dateAndTime:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
},
{
    timestamps:true,
});

const Booking = mongoose.model('Booking',bookingSchema);

module.exports = CreateEvent;
