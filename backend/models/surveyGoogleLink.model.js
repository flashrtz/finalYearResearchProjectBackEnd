const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({

    userId:{

        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3

    },  
    userEmail:{

        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3

    },
    link:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:3

    },
   

},
{
    timestamps:true,
});

const SurveyLink = mongoose.model('SurveyLink',eventSchema);

module.exports = SurveyLink;
