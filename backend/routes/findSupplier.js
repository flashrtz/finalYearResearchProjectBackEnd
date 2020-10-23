const router = require('express').Router();

let User = require('../models/user.model');
let ManageBookings = require('../models/manageSupplierBooking.model');


router.route('/getall').get((req,res) =>{
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/all').get((req,res) =>{
   // var firstname = req.params.firstname;
    //window.location.reload();
    User.find({firstname:req.params.firstname})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/allcheck').get((req, res) =>{

    //var firstname = req.param('firstname');
    User.find({userCategory:req.param('userCategory'),guestCount:req.param('guestCount')})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));

  });

 router.route('/getallBookings').get((req,res) =>{
    ManageBookings.find({})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
