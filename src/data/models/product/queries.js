import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import type from './type'
import model from './schema'

export default {
  getOneProduct: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOneProduct
  },
  getProducts: {
    type: new GraphQLList(type),
    resolve: model.getProducts
  },

  getProductsByCategory: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getProductsByCategory
  },

  productsInCategory: {
    type: new GraphQLList(type),
    args: {
      slug2: {
        type: GraphQLString
      }
    },
    resolve: model.productsInCategory
  },

  getNoiBat: {
    type: new GraphQLList(type),
    resolve: model.getProductsNoiBat
  },
  getBanChay: {
    type: new GraphQLList(type),
    resolve: model.getProductsBanChay
  },
  getKhuyenMai: {
    type: new GraphQLList(type),
    resolve: model.getProductsKhuyenMai
  },

};
