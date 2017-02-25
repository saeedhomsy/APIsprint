var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);