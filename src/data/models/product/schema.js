let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  // category: String,
  slug: { type:String, required:true, unique: true, index: true},
  name: String,
  // public: {type: Boolean, default: false},
  category: { type: String, require: true, default: 'san-pham-khac'},
  unit: { type: String, require: true, default: 'hộp'},
  loai: {type: [String], require: true, default: []},
  coverUrl: String,
  coverUrl2: {type: [String], defautl: []},
  coverUrl3: {type: [String], defautl: []},
  price: {type: Number, default: 0},
  newPrice: {type: Number, default: 0},
  body: String,
  description: String,
  view: {type: Number, default: 0},
  saleOff: {
    type: {type: Number},
    value: {type: Number}
  },
  // tags:[Schema.Types.Mixed],
  created_at: {type: Date, default: Date.now},
});

let model = mongoose.model('Product', schema);

module.exports = model;

// get ( product )


module.exports.getOneProduct = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.findOne({slug: slug}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getProducts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProductsByCategory = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.find({category: slug}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.productsInCategory = (root, { slug2 }) => {
  console.log('slug2')
  console.log(slug2)
  return new Promise((resolve, reject) => {
    model.find({category: slug2}).exec((err, res) => {
      console.log('===============')
      console.log(res)
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProductsNoiBat = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({loai: 'noi-bat'}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
module.exports.getProductsBanChay = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({loai: 'ban-chay'}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
module.exports.getProductsKhuyenMai = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({loai: 'khuyen-mai'}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

