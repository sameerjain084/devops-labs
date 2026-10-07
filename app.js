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
        <h1>🚀 AWS CI/CD Pipeline</h1>
        <p>Deployed using GitHub → AWS CodePipeline → Elastic Beanstalk</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
