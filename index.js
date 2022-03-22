'use strict';

const app = require('./server/app');

const  PORT = process.env.PORT || 3000; // make sure you use the environment variable for port. This is important for deployment

app.listen(PORT, () => {
  console.log('Server Listening');
});
