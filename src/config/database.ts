// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI as string,);
//         console.log(`MongoDB connected successfully, ${process.env.MONGO_URI}`);
//     } catch (err) {
//         console.error('MongoDB connection error:', err);
//         process.exit(1);
//     }
// };

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI as string;
        if (!mongoUri) {
            throw new Error('MONGO_URI environment variable is not defined');
        }
        await mongoose.connect(mongoUri);
        console.log(`MongoDB connected successfully${mongoUri}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectDB;
