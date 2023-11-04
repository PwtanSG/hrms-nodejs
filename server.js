const cors = require('cors');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
//create express app
const express = require('express');
const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//serve static
app.use('/public', express.static('Public'));

//handle route
app.get('/', (req, res) => {
    res.status(200).send("hello world");
});

const userRouter = require('./routes/userRoutes');
app.use('/api', userRouter)

app.listen(PORT, () => { console.log(`server connect at ${PORT}`) });