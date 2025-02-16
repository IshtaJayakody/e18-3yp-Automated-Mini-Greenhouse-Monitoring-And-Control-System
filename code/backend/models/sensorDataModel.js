const mongoose = require('mongoose');

const sensorSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    temperature:{
        type: String,
        required: [true, 'Please add a Temperature Reading']
    },
    humidity:{
        type: String,
        required: [true, 'Please add Humidity Reading'], 
    },
    soilmoisture:{
        type: String,
        required: [true, 'Please add a SoilMoisture Reading']
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('SensorData',sensorSchema);