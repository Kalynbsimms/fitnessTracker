const route = require('express').Router()

const { Workout} = require('../models')
const router = require('express').Router()

// Get all workouts
router.get('/workouts', (req,res) => {
    Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// post one workout
router.post('/workouts', (req,res) => {
    Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// Put one Workout
router.put('/workouts/id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// Delete one Workout
router.delete('/workouts/:id', (req, res)=>
{
    Workout.findOneAndDelete(req.params.id)
    .then(()=> res.sendStatus(200))
    .catch(err => console.log (err))
})

module.exports = router