const mongoose = require('mongoose');
const mongoUri =  'mongodb+srv://glitchAyub:00000000@cluster0.mhor3uc.mongodb.net/foodappmern?retryWrites=true&w=majority';

global.food_items = [];
global.foodCategories = [];

const mongodb = async () => {
    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected");

        const foodItemsCollection = mongoose.connection.db.collection('food_items');
        const foodCategoriesCollection = mongoose.connection.db.collection('foodCategories');

        global.food_items = await foodItemsCollection.find({}).toArray();
        global.foodCategories = await foodCategoriesCollection.find({}).toArray();

        console.log(global.food_items);
        console.log(global.foodCategories);
    } catch (err) {
        console.log(`connection failed ${err}`);
    }
};

module.exports = mongodb;


