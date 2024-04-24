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

app.get('/campName', async (req,res) => {
    const title = new Campground({title: 'Manchester'});
    await title.save();
    res.send(title);
});



app.listen(3000, ()=>  {
    console.log("listening to port 3000");
})
