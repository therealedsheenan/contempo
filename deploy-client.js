// ./index.js
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// serve static static normally
// static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/static',  express.static(path.join(__dirname, 'public/static')));

// Handles all routes so you do not get a not found error
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public/static', 'index.html'));
});

app.listen(port);

console.log(`server started on port ${port}`);
