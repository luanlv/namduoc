var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');

var Schema = new mongoose.Schema({
  menu: {type: mongoose.Schema.Types.Mixed, default: '[]'},
  menuBottom: {type: mongoose.Schema.Types.Mixed, default: '[]'},
  fanpage: {type: mongoose.Schema.Types.Mixed},
  phone: {type: mongoose.Schema.Types.Mixed},
  diachi: {type: mongoose.Schema.Types.Mixed},
  email: {type: mongoose.Schema.Types.Mixed},
}, { collection: 'info' });

// Schema.plugin(autoIncrement.plugin, 'Place');

Schema.plugin(uniqueValidator, {message: 'is already taken.'});

let model = mongoose.model('Info', Schema);

module.exports = model;

module.exports.info = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err || !res[0] ? reject(err) : resolve(res[0]);
    })
  })
}
