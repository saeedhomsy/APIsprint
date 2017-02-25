var Category = require('./categoryModel.js');

module.exports = {
    insertCategory: function (req, res) {
        for (var i = 0; i < req.body.length; i++) {
            Category.create(req.body[i], function (err, category) {
                if (err) {
                    throw err
                }
            });
        }
        res.json(req.body);
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
        Category.findById(req.params._id, function (err, category) {
            if (err) {
                throw err
            }
            res.json(category);
        });
    }


}