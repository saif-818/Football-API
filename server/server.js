const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/route.js');
const apiRoute = require('./routes/api.routes.js');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', Router);
app.use('/api', apiRoute);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));