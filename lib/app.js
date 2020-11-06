const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.json());

app.use('/api/v1/recipes', require('./controllers/recipes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
