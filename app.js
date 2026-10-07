const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Labs CI/CD</title>
      </head>
      <body>
        <h1>🚀 AWS CI/CD Pipeline - VERSION 2</h1>
          <p>🔥 VERSION 2 - Automatically deployed through CI/CD</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
