const express = require('express');
const dbConnect = require('./dbConnect/sqlConnect');
const blogRoute = require('./Router/blogRouter');
const morgan = require('morgan');
const PORT = 4000;
const app = express();

dbConnect();

//Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.use("/api/blog",blogRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})