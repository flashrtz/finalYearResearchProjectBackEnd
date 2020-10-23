const router = require('express').Router();

let User = require('../models/surveyIn.model');
const { collection } = require('../models/surveyIn.model');
//const Survey = require('../models/surveyIn.model');

router.route('/all').get((req,res) =>{
   // console.log("findbyId");
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/findById/:id').get((req,res) =>{
//console.log("findbyId");
    User.findById({_id:req.params.id})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});
//router.route('/add').post((req,res) =>{

//const username = req.body.username;

router.route('/add').post((req,res) =>{
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    })
     .catch(err => res.status(400).json('Error: ' + err));  

});


router.route('/addAll').post((req,res) =>{
    // const user = new User(req.body)
    // user.insertMany().then(() => {
    //     res.send(user)
    // })
    //  .catch(err => res.status(400).json('Error: ' + err));  
  
        collection.insertMany( req.body ).then(() => {
            res.send(true)
        })
         .catch(err => res.status(400).json('Error: ' + err));  
     // .catch(err => res.status(400).json('Error: ' + err));  

});



module.exports = router;
