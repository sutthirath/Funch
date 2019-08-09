const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const mongoose = require("./config/database");
const typeDefs = require("./modules/post/graphqlSchema");
const resolvers = require("./modules/post/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const PORT = 3000; // Secure port before deploy

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}${server.graphqlPath}`
  );
});
