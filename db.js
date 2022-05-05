const mongoose = require ("mongoose");
dbConnect()

async function dbConnect(){
    try {
        mongoose.connect('mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/sheyjobsudemy', {useNewUrlParser : true});
        console.log('Mongo DB Connection Success')
    } catch (error) {
        console.log('Mongo DB Connection failed') 
    }
}

module.exports = mongoose