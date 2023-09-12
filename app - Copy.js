const express = require('express');
const app = express();
const connectDb = require('./configs/database');
const router = require('./routes');

app.use(express.json());
connectDb();
router(app);

app.listen(5000, () => {
  console.log('App running at port 5000');
});
