// ./index.js
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;
const app = express();

// serve static static normally
// asset files
app.use(express.static(path.join(__dirname, 'public')));

// Handles all routes so you do not get a not found error
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);

console.log(`server started on port ${port}`);
