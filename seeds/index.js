const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

const MONGO_URI = 'mongodb://localhost/camp-booking';


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const camp = new Campground({
            location: `${cities[i].city}, ${cities[i].state}`,
            title: `${descriptors[i]} ${places[i]}`
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
