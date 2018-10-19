const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('database is up and running👌')
})

const port = process.env.PORT || 4040;
app.listen(port, () => {
    console.log(`Server is surfin on port ${port}🏄‍♂️`)
})