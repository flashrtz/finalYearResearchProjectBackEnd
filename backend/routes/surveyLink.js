const router = require('express').Router();

let Event = require('../models/surveyGoogleLink.model');

// router.route('/all').get((req,res) =>{

//     Event.find()
//         .then(surveyLink => res.json(surveyLink))
//         .catch(err => res.status(400).json('Error: ' + err));

// });
router.route('/all').get((req,res) =>{
    // console.log("findbyId");
    Event.find()
         .then(users => res.json(users))
         .catch(err => res.status(400).json('Error: ' + err));
 
 });

router.route('/all').post((req,res) =>{

    const event = new Event(req.body)

    event.save().then(() => {
        res.send(event)
    }).catch((e) => {
        res.status(400).send(e)
    })
});


module.exports = router;
