const express = require('express');
const app = express();
const port = 3000;

const routes = require('./route');
app.use('/configuration', routes);

app.get('/', (req, res) => {
    var data = {'status' : 'OK'};
    res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});