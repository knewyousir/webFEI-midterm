const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.findAll = function(req, res) {
    User.find({}, function(err, results){
    return res.send(results)
    })
};

exports.add = function(req, res) {
    console.log(req.body);
    User.create(req.body, (err, user) => {
        if (err) return console.log(err);
        return res.redirect('/')
    });
};

exports.delete = function(req, res) {
    let id = req.params.id;
    User.deleteOne({ _id: id }, (result) => {
    return res.send(result);
    });
};