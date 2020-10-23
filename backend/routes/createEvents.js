const router = require('express').Router();

let Event = require('../models/createevent.model');

router.route('/all').get((req,res) =>{

    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) =>{

    const event = new Event(req.body)

    event.save().then(() => {
        res.send(event)
    }).catch((e) => {
        res.status(400).send(e)
    })
});


module.exports = router;
