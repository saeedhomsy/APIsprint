var mongoose = require('mongoose');

var mobileSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    }
});

var Mobile = module.exports = mongoose.model('Mobile', mobileSchema);