const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/message', (req, res) => {
  res.json({ msg: ' Hi From Backend' }); 
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});