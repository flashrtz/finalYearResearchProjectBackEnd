const router = require('express').Router();

let Booking = require('../models/booking.model');

// router.route('/').get((req,res) =>{
//     Booking.find()
//         .then(events => res.json(events))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post((req,res) =>{

    const booking = new Booking(req.body)
    booking.save().then(() => {
        res.send(event)
      }).catch((e) => {
          res.status(400).send(e)
      })
});



module.exports = router;
