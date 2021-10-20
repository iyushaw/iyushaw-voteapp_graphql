const graphiql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = graphiql;

const StationType = new GraphQLObjectType({
    name: 'Station',
    fields: ()=>({
        id: { type: GraphQLID },
        sid: { type: GraphQLString },
        name: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){

            }
        } 
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ()=>({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        station: {
            type: new GraphQLList(StationType),
            resolve(parent, args){

            }
        }
    })
});

const PartyType = new GraphQLObjectType({
    name: 'Party',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        tally: { type: GraphQLInt },
        station: {
            type: new GraphQLList(StationType),
            resolve(parent, args){

            }
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){

            }
        },

        station: {
            type: StationType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args){

            }
        },

        party: {
            type: PartyType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){

            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                username: { type: GraphQLString },
                password: { type: GraphQLString },
            },
        addParty: {
            type: PartyType,
            args: {
                name: { type: GraphQLString },
                tally: { type: GraphQLInt }
            }
        }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});