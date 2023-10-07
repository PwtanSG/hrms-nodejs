const cors = require('cors');
const PORT = 5000;
//create express app
const express = require('express');
const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//serve static
//app.use('/public', express.static('Public'));

//handle route
app.get('/', (req, res) => {
    res.status(200).send("hello world");
});

app.listen(PORT, () => { console.log(`server connect at ${PORT}`) });