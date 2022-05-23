const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const backgroundController = require('./controllers/backgroundControllers');
const weatherController = require('./controllers/weatherController');
const quoteController = require('./controllers/quoteController');




const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());

app.use('/api/background', backgroundController);
app.use('/api/weather', weatherController);
app.use('/api/quote', quoteController);
app.get('/', function(req,res) {
    res.send('hello world')
})


const PORT = process.env.PORT || 5000;


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server running on port ${PORT}`);
});