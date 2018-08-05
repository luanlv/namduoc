import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/danh-muc/:slug2',
  async action({store, params, path }) {
    let seo = {}
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      store.dispatch(showLoading())
      let info = 'info{ menu, menuBottom, phone, fanpage, diachi, thanhtoan, email}'
      // console.log("params.slug")
      // console.log(params.slug2)
      let productsInCategory = 'productsInCategory(slug2: "'+ params.slug2 +'"){name, price, slug, coverUrl, description, saleOff, body, created_at}'
      let khuyenmai = 'getKhuyenMai{name, slug, price, coverUrl, description, saleOff, body, created_at}'
      let banchay = 'getBanChay{name, slug, price, coverUrl, description, saleOff, body, created_at}'
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{'+ productsInCategory + khuyenmai + banchay + info + 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description} }',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      // console.log('data')
      // console.log(data)
      seo = data.seo || {}
      store.dispatch(setData(data))
      store.dispatch(hideLoading())
    }

    return {
      title: seo.title || 'Danh mục sản phẩm',
      description: seo.description || '',
      seo: seo,
      component: <Layout data={store.getState().data} ><Home slug={params.slug2} data={store.getState().data}  products={store.getState().data.productsInCategory.value} /></Layout>,
    };
  },

};
