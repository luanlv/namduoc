import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import {setData} from '../../actions/data'

export default {
  path: '/cau-hoi-thuong-gap',
  async action({ store, query, path }) {
    let seo = {}
    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())){
      let info = 'info{ menu, phone, fanpage, diachi, thanhtoan }'
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
    }

    return {
      title: seo.title || 'Câu hỏi thuờng gặp',
      description: seo.description || '',
      seo: seo,
      component: <Layout data={store.getState().data} ><Home selectProduct={query.sp} /></Layout>,
    };
  },

};
