const router = require('express').Router();

let booking = require('../models/manageSupplierBooking.model');

const { collection } = require('../models/manageSupplierBooking.model');

router.route('/userIdGet').get((req,res) =>{
  // var firstname = req.params.firstname;
   //window.location.reload();
   booking.find({userId:req.param('userId')})
       .then(booking => res.json(booking))
       .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/allbookings').get((req,res) =>{
  //console.log("findbyId");
  booking.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/allcheck').get((req, res) =>{

  //var firstname = req.param('firstname');
  booking.find({userId:req.param('userId')})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));

});

  router.route('/add').post((req,res) =>{
    console.log(req.body);
    const event = new booking(req.body)
    event.save().then(() => {
        res.send(event)
    })
     .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update').post((req,res) =>{

  const bookinsg = new booking(req.body)
  bookinsg.save({_id:req.param('_id')}).then(() => {
    res.send(bookinsg)
})
 .catch(err => res.status(400).json('Error: ' + err));

  // bookinsg.findOneAndUpdate({_id:req.param('_id')}).then(() => {
  //     res.send(event)
  //   }).catch((e) => {
  //       res.status(400).send(e)
  //   })
});

module.exports = router;
