const router = require('express').Router();

//let Event = require('../models/createevent.model');

//use the midd

var storage  = multer.diskStorage


router.route('/').get((req,res) =>{

    res.sendFile(__dirname+'');
})
 
router.route('/add').post(upload.single(''),(req,res) =>{

    const file = req.file;

  if(!file){

    const error = new Error("Error");
    error.httpStatusCode = 400;
    return next(error);

  }
  res.send(file);
});

module.exports = router;
