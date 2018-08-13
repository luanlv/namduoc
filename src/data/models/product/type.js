import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} from 'graphql'

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

// Define our user type, with two string fields; `id` and `name`
import GraphQLJSON from 'graphql-type-json';

export default new GraphQLObjectType({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    slug: {
      type: GraphQLString
    },
    coverUrl: {
      type: GraphQLString
    },
    coverUrl2: {
      type: new GraphQLList(GraphQLString)
    },
    coverUrl3: {
      type: new GraphQLList(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    unit: {
      type: GraphQLString
    },
    loai: {
      type: new GraphQLList(GraphQLString)
    },
    price: {
      type: GraphQLInt
    },
    newPrice: {
      type: GraphQLInt
    },
    description: {
      type: GraphQLString
    },
    body: {
      type: GraphQLString
    },
    view: {
      type: GraphQLInt
    },
    saleOff: {
      type: GraphQLJSON
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
