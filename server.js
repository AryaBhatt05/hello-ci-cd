const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// simple health/hello endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'CI/CD pipeline is working 🚀'
  });
});

// export app for tests
module.exports = app;

// only start server if not in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
