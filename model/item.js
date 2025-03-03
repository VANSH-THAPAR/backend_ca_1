const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:String,
        unique: true
    }
})

module.exports = mongoose.model('itemModel',itemSchema)