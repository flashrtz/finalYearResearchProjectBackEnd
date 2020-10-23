const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    review:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    
    email:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    rating:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    
},
{
    timestamps:true,
});

const Review = mongoose.model('Review',userSchema);

module.exports = Review;
