const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

const index = http.createServer(app);

index.listen(port);
