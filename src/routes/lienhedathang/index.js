import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/lien-he-dat-hang',
  async action({ store, query, path }) {
    let seo = {}
    let info = 'info{ menu }'
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      store.dispatch(showLoading())
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{' + info + 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}}',
        }),
        credentials: 'include',
      });

      const {data} = await resp.json();
      seo = data.seo || {}
      if (!data) throw new Error('Failed to load the news feed.');
      store.dispatch(setData(data))
      store.dispatch(hideLoading())
    }

    return {
      title: seo.title || 'Liên hệ đặt hàng',
      description: seo.description || '',
      seo: seo,
      component: <Layout data={store.getState().data} ><Home selectProduct={query.sp} /></Layout>,
    };
  },

};
