const express = require('express');
const db = require('./models/db');
const Campground = require('./models/campground');
const path = require('path');



const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req,res) => {
    res.render('home');
});

app.get('/campGrounds', async (req,res) => {
    const campGrounds = await Campground.find({});
    res.render('index', {campGrounds})
});



app.listen(3000, ()=>  {
    console.log("listening to port 3000");
})
