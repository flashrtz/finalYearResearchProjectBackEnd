const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({

    title:{

        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3

    },
    description:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    numberofTicketCategories:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    ticketOne:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:1

    },
    ticketOnePrice:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:0

    },
    ticketTwo:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:0

    },
    ticketTwoPrice:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:0

    },
    ticketThree:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:0

    },
    ticketThreePrice:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:0

    },
    dateAndTime:{

        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3

    },
    location:{

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

const CreateEvent = mongoose.model('CreateEvent',eventSchema);

module.exports = CreateEvent;
