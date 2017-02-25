var Category = require('./categoryModel.js');

module.exports = {
    insertCategory: function (req, res) {
        Category.create(req.body, function (err, category) {
            if (err) {
                throw err
            }
            res.json(category);
        });
    },

    getAllCategories: function (req, res) {
        Category.find(function (err, data) {
            if (err) {
                throw err
            }
            res.json(data);
        });
    },

     getCategoryByID: function (req, res) {
        Category.findById(req.params._id,function (err, category) {
            if (err) {
                throw err
            }
            res.json(category);
        });
    }


}