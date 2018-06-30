const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const Products = require ('./routes/api/Products');

const app = express();

//bodyparser middlewre
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

// connect to mongo
// mongoose
// .connect(db)
// .then(() => console.log('Mongodb Connected ....'))
// .cath(err => console.log(err));
mongoose.connect(db) // if error it will throw async error
    .then(() => { // if all is ok we will be here
        console.log('Mongodb Connected ....')
    })
    .catch(err => { // we will not be here...
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

//use routes
app.use('/api/products', Products);

// serve static assets if in production in heroko
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('backend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'backend', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started MR J on port ' + port));