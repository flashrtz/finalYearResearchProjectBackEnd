const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstname:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    
    lastname:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    
    email:{

        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3

    },
    
    userCategory:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    
    guestCount:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    
    phoneNumber:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    
    address:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:3

    },
    
    address2:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:3

    },
    
    city:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:3

    },
    
    zip:{

        type:String,
        required:false,
        unique:false,
        trim:true,
        minlength:3

    },
    
    likeOthers:{

        type:Boolean,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    
    password:{

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

const User = mongoose.model('User',userSchema);

module.exports = User;
