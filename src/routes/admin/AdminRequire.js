var AdminRequire =  require.ensure([], require => {
    return {
      App: require('./Components/App').default,
      Dashboard: require('./dashboard/Admin').default,
      Library: require('./library/Library').default,
      Setting: require('./setting/Setting').default,
      Menu: require('./menu/Menu').default,
      MenuBottom: require('./menuBottom/MenuBottom').default,
      ThongTin: require('./thongtin/ThongTin').default,
      Editor: require('./editor/Editor').default,
      ListNews: require('./news/ListNews').default,
      EditKhuyenMai: require('./news/EditKhuyenMai').default,
      EditNews: require('./news/EditNews').default,
      EditFoods: require('./monngon/EditFoods').default,
      ListFoods: require('./monngon/ListFoods').default,
      EditProduct: require('./product/EditProduct').default,
      ListProduct: require('./product/ListProduct').default,
      Seo: require('./seo/View.js').default
    }
  }
)

module.exports = AdminRequire
