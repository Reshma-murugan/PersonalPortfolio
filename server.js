const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static('dist'));

// Serve the CV file
app.get('/download-cv', (req, res) => {
  const cvPath = path.join(__dirname, 'public', 'Reshma_Murgan_CV.html');
  res.download(cvPath);
});

// For all other routes, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});