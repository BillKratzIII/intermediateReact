console.log({ starting: true});

import express from 'express';

const app = express();

import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	description: 'The root query',
	fields: {
		viewer: {
			type: GraphQLString,
			resolve() {
				return 'viewer!';
			}
		},
		something: {
			type: GraphQLString,
			resolve() {
				return 'something!';
			}
		}
	}
});

const Schema = new GraphQLSchema({
	query: RootQuery
});

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql:true }));

app.listen(3000, () => {
console.log({ running: true });
});