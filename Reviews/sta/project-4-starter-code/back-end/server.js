const express = require('express');
const mainRouter = require('../../Reviews/sta/project-4-starter-code/back-end/routes/main-route');
const cors = require('cors');
require('dotenv').config();

const db = require('../../Reviews/sta/project-4-starter-code/back-end/db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
