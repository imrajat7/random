const express = require("express");
const app = express();
const PORT = process.env.PORT || 6969;
const userData = require("./MOCK_DATA.json");
const schema = require("./Schemas/index");

const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Yippie! Server running on port ${PORT}`);
});
