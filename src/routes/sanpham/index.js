import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/san-pham/:slug',
  async action({ store, params, path }) {
    let seo = {}

    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      store.dispatch(showLoading())
      let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}'
      let noibat = 'getNoiBat{name, slug, price, coverUrl, description, saleOff, body, created_at}'
      let khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}'
      let banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}'
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{'  + banchay +  info + ' seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description},getProducts{name, slug, price, coverUrl, coverUrl2, coverUrl3, newPrice, description, saleOff, body, created_at},getOneProduct(slug: "'+ params.slug +'"){name, slug, price, coverUrl, coverUrl2, coverUrl3, newPrice, description, saleOff, body, created_at, unit} }',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      seo = data.seo || {}
      store.dispatch(setData(data))
      store.dispatch(hideLoading())
    }
    return {
      title: seo.title || store.getState().data.product.value.name,
      description: seo.description || store.getState().data.product.value.description,
      seo: seo,
      component: <Layout data={store.getState().data}>
        <Home banchay={store.getState().data.banchay.value} product={store.getState().data.product.value} products={store.getState().data.products.value} /></Layout>,
    };
  },

};
