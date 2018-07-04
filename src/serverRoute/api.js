var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const Setting = mongoose.model('Setting')
const Product = mongoose.model('Product')
const Order = mongoose.model('Order')
const Seo = mongoose.model('Seo')
const Info = mongoose.model('Info')
let bodyParser = require('body-parser')
let Mailer = require('./services/mailgun');
let axios = require('axios')
// import {FB, FacebookApiException} from 'fb';
//
// FB.options({version: 'v2.9'});
// var comhoavangApp = FB.extend({appId: '1968072516812373', appSecret: '4e2c8135946ac8e7b7cd8cd48492d648'}),

router.post('/menuBottom/new', bodyParser.json() ,(req, res) => {
  console.log(req.body)
  Info.update({key: "info"}, {$set: { menuBottom: req.body.menuBottom }}, {upsert: true}, function(err){
    if(err) {
      console.log(err)
      return res.status(400).end();
    }
    return res.send('ok')
  })
})

router.get('/menuBottom/get', (req, res) => {
  Info.findOne({key: "info"}, (err, data) => {
    if(err) return res.json({})
    if(!data.menu) return res.json({})
    return res.json(data.menuBottom)
  })
})

router.post('/menu/new', bodyParser.json() ,(req, res) => {
  console.log(req.body)
  Info.update({key: "info"}, {$set: { menu: req.body.menu }}, {upsert: true}, function(err){
    if(err) {
      console.log(err)
      return res.status(400).end();
    }
    return res.send('ok')
  })
})

router.get('/menu/get', (req, res) => {
  Info.findOne({key: "info"}, (err, data) => {
    if(err) return res.json({})
    if(!data.menu) return res.json({})
    return res.json(data.menu)
  })
})


router.post('/thongtin', bodyParser.json() ,(req, res) => {
  // console.log(req.body)
  // console.log(req.body.phone)
  Info.update( {}, {$set: {
    phone:  req.body.phone,
    fanpage: req.body.fanpage,
    diachi: req.body.diachi,
    thanhtoan: req.body.thanhtoan
  }}, function(err, resData){
    if(err) {
      console.log(err)
      return res.status(400).end();
    }
    console.log(resData)
    return res.send('ok')
  })
})

router.get('/thongtin/get', (req, res) => {
  Info.findOne({key: "info"}, (err, data) => {
    if(err) return res.json({})
    if(!data) return res.json({})
    return res.send(data)
  })
})

router.post('/post/new', bodyParser.json() ,(req, res) => {
  Post.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/post/update', bodyParser.json() ,(req, res) => {
  Post.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/setting/update', bodyParser.json() ,(req, res) => {
  Setting.findOneAndUpdate({id: "setting"}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
})

router.post('/product/delete', bodyParser.json() ,(req, res) => {
  Product.remove({slug: req.body.slug}, () => {
    res.send('ok')
  })
})



router.post('/post/delete', bodyParser.json() ,(req, res) => {
  Post.remove({slug: req.body.slug}, () => {
    res.send('ok')
  })
})

router.post('/product/new', bodyParser.json() ,(req, res) => {
  Product.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/product/update', bodyParser.json() ,(req, res) => {
  console.log(req.body)
  Product.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/order/new', bodyParser.json() ,async (req, res) => {
  let setting = await Setting.findOne({})
  let adminId = setting.adminId
  let emailAdmin = setting.emailAdmin
  Order.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    Mailer.sendNewOrderMail(emailAdmin, resData.name, resData.phone)
    // Mailer.sendNewOrderMail('luanlv2591@gmail.com', resData.name, resData.phone)
    axios.post('https://graph.facebook.com/' + adminId + '/notifications?access_token=123093138237586|FEx3yoFukySO_rviU4Wl6MJxyRA&href=admin&template=Co_don_hang_moi')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    return res.send(resData)
  })
})

router.post('/seo/new', bodyParser.json() ,(req, res) => {
  Seo.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/seo/update', bodyParser.json() ,(req, res) => {
  Seo.findOneAndUpdate({url: req.body.url}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

module.exports = router;
