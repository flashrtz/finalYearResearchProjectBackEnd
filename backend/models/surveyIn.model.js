const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({

    userId:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    surveyTopic:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    categoryName:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    answer1:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    answer2:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    answer3:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:1

    },
    answer4:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:1

    },
},
{
    timestamps:true,
});

const Survey = mongoose.model('Survey',surveySchema);

module.exports = Survey;
