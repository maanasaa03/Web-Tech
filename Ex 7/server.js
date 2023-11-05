const express = require('express'); const path = require('path');

const app = express();

// Define a route for the root path app.get('/', (req, res) => {
const indexPath = path.join( dirname, 'index.html'); res.sendFile(indexPath);
});

// Define a route for the /about path app.get('/about', (req, res) => {
const aboutPath = path.join( dirname, 'about.html'); res.sendFile(aboutPath);
});

// Define a route for serving images app.get('/image', (req, res) => {
const imagePath = path.join( dirname, 'images', 'bs.jpg'); res.sendFile(imagePath);
});

const PORT = 3000;

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
