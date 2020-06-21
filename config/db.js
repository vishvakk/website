const mongoose = require('mongoose');

const connectDB =  async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true
        });
        console.log(`Mongo DB connected on ${conn.connection.host}`.cyan)
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
    
};


module.exports = connectDB;