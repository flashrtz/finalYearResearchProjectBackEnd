const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    nameEvent:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    
    nameEventHostler:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3

    },
    
    contactEventHostler:{

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
        minlength:1

    },
    
    dateAndTime:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },

    userId:{

        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1

    },
    firstname:{

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
    
},
{ 
    timestamps:true,
});

const ManageSupplierBooking = mongoose.model('ManageSupplierBooking',userSchema);

module.exports = ManageSupplierBooking;
