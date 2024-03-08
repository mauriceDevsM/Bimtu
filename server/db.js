import mongoose from 'mongoose';

const connectToDatabase = async () =>{
    try {
        mongoose.set('strictQuery', false)
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            // useUnifiedTopology: true,
            // userNewUrlParser: true 
        });
        console.log(`MongoDb connected:`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export default connectToDatabase;