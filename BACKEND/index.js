const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const db = require('./db')
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express()
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
  
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/userRoutes', userRoutes);
app.use('/bookRoutes', bookRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))