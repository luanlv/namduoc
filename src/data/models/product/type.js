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
      type: new GraphQLNonNull(GraphQLString)
    },
    coverUrl: {
      type: new GraphQLNonNull(GraphQLString)
    },
    coverUrl2: {
      type: new GraphQLList(GraphQLString)
    },
    coverUrl3: {
      type: new GraphQLList(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    category: {
      type: new GraphQLNonNull(GraphQLString)
    },
    unit: {
      type: new GraphQLNonNull(GraphQLString)
    },
    loai: {
      type: new GraphQLList(GraphQLString)
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    newPrice: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    body: {
      type: GraphQLString
    },
    view: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    saleOff: {
      type: GraphQLJSON
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLDateTime)
    },
  })
});
