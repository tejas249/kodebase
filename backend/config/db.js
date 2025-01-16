const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        // Add the database url and name after the cluster URL
        await mongoose.connect("",{
 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;
