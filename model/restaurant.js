const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true
    },
    items:[{
        itemid: mongoose.SchemaType.objectID
    }]
})

module.exports = mongoose.model('restaurantModel',restaurantSchema); 