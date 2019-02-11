const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
require('dotenv').config();
const hC = require('./controller');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('database is up and running👌')
})
app.use( express.static( `${__dirname}/../build` ) )

app.get('/api/houses', hC.getAllHomes);
app.post('/api/houses', hC.postHome);
app.delete('/api/houses/:id', hC.deleteHome);
app.put('/api/houses', hC.editPrice);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 4040;
app.listen(port, () => {
    console.log(`Server is surfin on port ${port}🏄‍♂️`)
})