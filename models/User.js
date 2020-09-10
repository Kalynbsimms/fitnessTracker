const {model, Schema } = require('mongoose')

const User = new Schema ({
    name:{
        type: String,
        required: true
    },
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }]

}, {timestamp: true })

module.exports= model ('User', User)