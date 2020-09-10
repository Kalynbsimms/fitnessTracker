const router = require ('express').Router()
const {User} = require ('../models')

// Get all Users
router.get('/users', (req,res) =>{
    User.find()
    .populate('workouts')
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// Post one User
router.post('./users',(req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// Put one User
router.put('/users/:id',
(req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200)
}