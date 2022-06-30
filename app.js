const express = require('express');
const warapi = require('./warapi.js');

const app = express();

// prefix starts with /
const endpoints = (prefix) => {
  app.use(prefix, express.static('public'));

  app.get(prefix, (request, response) => {
      response.sendFile(__dirname + '/views/index.html');
  });

  app.get(prefix + '/api/dynamic', (request, response) => {
      response.sendFile(__dirname + '/data/dynamic.json');
  });

  app.get(prefix + '/api/static', (request, response) => {
      response.sendFile(__dirname + '/data/static.json');
  });

  app.get(prefix + '/api/regions', (request, response) => {
      response.sendFile(__dirname + '/data/regions.json');
  });
}

endpoints("/");
endpoints("/map");

const port = 3002;
app.listen(port, () => {
    console.log(`App listening at ${port}`);

    warapi.updateWarData();
    setInterval(warapi.updateWarData, 60000);
});
