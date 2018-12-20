import graphqlHTTP from "express-graphql";
import schema from "./schemas";
import { root } from "./resolver";

export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
});
