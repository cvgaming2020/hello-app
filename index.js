// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log("Hello 12123814"); // Log to server console
  res.send("Check server console for message!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
