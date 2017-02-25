var Mobile = require('./mobileModel.js');

module.exports = {
    insertMobile: function (req, res) {
        Mobile.create(req.body, function (err, Mobile) {
            if (err) {
                throw err
            }
            res.json(Mobile);
        });
    },

    getAllMobiles: function (req, res) {
        Mobile.find(function (err, Mobiles) {
            if (err) {
                throw err
            }
            res.json(Mobiles);
        });
    },

     getMobileByID: function (req, res) {
        Mobile.findById(req.params._id,function (err, Mobile) {
            if (err) {
                throw err
            }
            res.json(Mobile);
        });
    }


}