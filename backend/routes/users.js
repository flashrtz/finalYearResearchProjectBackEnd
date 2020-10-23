const router = require('express').Router();

let User = require('../models/user.model');
const { collection } = require('../models/user.model');

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

//const newUser = new User({username}); 

// newUser.save()
//     .then(()=> res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));

// });

module.exports = router;
