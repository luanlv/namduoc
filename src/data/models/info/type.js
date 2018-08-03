import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql'
import GraphQLJSON from 'graphql-type-json';

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Info',
  description: 'Info object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    key: {
      type: new GraphQLNonNull(GraphQLString)
    },
    menu: {type: GraphQLString},
    menuBottom: {type: GraphQLString},
    fanpage: {type: GraphQLString},
    phone: {type: GraphQLString},
    diachi: {type: GraphQLString},
    thanhtoan: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})
