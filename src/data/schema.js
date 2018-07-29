/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

// import me from './queries/me';
import news from './queries/news';
import imageQueries from './models/image/queries'
import postQueries from './models/post/queries'
import productQueries from './models/product/queries'
import userQueries from './models/user/queries'
import settingQueries from './models/setting/queries'
import orderQueries from './models/order/queries'
import seoQueries from './models/seo/queries'
import infoQueries from './models/info/queries'

// mutation
import settingMutation from './models/setting/mutations'
import postMutation from './models/post/mutations'


let {listImage} = imageQueries
let { users } = userQueries
let { setting } = settingQueries
let { info } = infoQueries
let { getOrders } = orderQueries
let { getNews, getOneNews, getFoodNews, getOnePost, getNewsInCategory} = postQueries
let { getOneProduct, getProducts, getNoiBat, getKhuyenMai, getBanChay, getProductsByCategory, productsInCategory} = productQueries
let { seo, allSeo } = seoQueries

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      setting,
      news,
      listImage,
      users,
      getNews,
      getOneNews,
      getFoodNews,
      getOnePost,
      getNewsInCategory,
      getOneProduct,
      getProducts,
      getOrders,
      seo,
      allSeo,
      info,
      getNoiBat,
      getKhuyenMai,
      getBanChay,
      getProductsByCategory,
      productsInCategory
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: {
      // addUser: userMutations.addUser,
      // updateUser: userMutations.updateUser
      updateSetting: settingMutation.update,
      newPost: postMutation.newPost
    },
  }),
});

export default schema;
