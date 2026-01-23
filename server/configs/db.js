import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database connected"));
        await mongoose.connect(process.env.MONGODB_URL); // Remove the template literal
    } catch(error) {
        console.error(error.message);
    }
}

export default connectDB;