const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require ('multer');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//app.use(bodyParser.urlencoded({extended:true}))
 
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){

        cb(null,file.fieldname + '-' + Date.now() + Path.extname(file.originalname));

    }

})

var upload= multer({ 
    storage:storage
})


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {

    console.log("MongoDB database connection established successfully!");

})

const usersRouter = require('./routes/users');
const eventssRouter = require('./routes/createEvents');
const findSupplierRouter = require('./routes/findSupplier');
const manageSupplierBooking = require('./routes/manageSupplierBooking');
const survey = require('./routes/survey');
const review = require('./routes/review');
const surveyLink = require('./routes/surveyLink');



app.use('/users',usersRouter)
app.use('/createEvents',eventssRouter)
app.use('/findSupplier',findSupplierRouter)
app.use('/manageSupplierBooking',manageSupplierBooking)
app.use('/survey',survey)
app.use('/review',review)
app.use('/surveyLink',surveyLink)

app.listen(port, () =>{

    console.log('Server is running on port: '+port);

})