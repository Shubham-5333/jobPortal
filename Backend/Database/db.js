import mongoose from "mongoose";
const URI = `mongodb+srv://jobportal:joblisting123@cluster0.p47unn5.mongodb.net/users`;

const connectDB = async () => {
    try {
        console.log("Attempting MongoDB connection...");
        
        // DNS fix (this worked!)
        const dns = await import('node:dns/promises');
        await dns.setServers(['8.8.8.8', '8.8.4.4']);
        console.log("DNS set to Google servers");
        
        // NO options needed in modern Mongoose
        const database = await mongoose.connect(URI);
        
        console.log("✅ MongoDB Connected:", database.connection.host);
    } catch (error) {
        console.error("❌ MongoDB Error:", error.message);
        process.exit(1);
    } 
};

export default connectDB;
