const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    service:{
        type:String,
        required: true
    },
    ssdNo:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
module.exports = mongoose.model('Card',CardSchema)