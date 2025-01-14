const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        // Add the database name after the cluster URL
        await mongoose.connect("mongodb+srv://tejas:tej@cluster0.1qzqb.mongodb.net/codeIDE",{
 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;
