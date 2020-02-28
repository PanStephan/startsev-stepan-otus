const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql

const ClientModel = require('../models/client.model')
const productModel = require('../models/product.model')

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    name: {type: GraphQLString},
    user: {type: GraphQLString}
  })
})

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    active: {type: GraphQLBoolean},
    id: {type: GraphQLID},
    product: {
      type: new GraphQLList(ProductType),
      resolve({_id}, args) {
				return productModel.find({ user: _id })
			},
    }
  })
})

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    addClient: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: {type: new GraphQLNonNull(GraphQLString)},
        active: {type: new GraphQLNonNull(GraphQLBoolean)},
      },
      resolve(parent, { name, email, active }) {
        const clients = new ClientModel({
          name,
          email, 
          active
        })
        return clients.save()
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, { name, user }) {
        const product = new productModel({
          name, 
          user
        })
        return product.save()
      },
    }
  })
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    clients: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
				return ClientModel.findById(id)
      },
    },
  })  
})

module.exports = new GraphQLSchema({
  query: Query,
	mutation: Mutation,
})