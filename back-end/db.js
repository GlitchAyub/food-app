const mongoose = require('mongoose');
const mongoUri =  'mongodb+srv://glitchAyub:00000000@cluster0.mhor3uc.mongodb.net/foodappmern?retryWrites=true&w=majority';

const mongodb = async () => {
    try {
      await mongoose.connect(mongoUri, { useNewUrlParser: true });
      console.log("connected");
  
      const fetchData = await mongoose.connection.db.collection('food_items').find({}).toArray();
      console.log(fetchData);
    } catch (err) {
      console.log(`connection failed ${err}`);
    }
  };

module.exports = mongodb;


