const express = require('express');
const router = require('./routes/route');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
