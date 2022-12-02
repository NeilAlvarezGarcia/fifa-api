import { connect } from "mongoose"

const connectDB = async () => {
    const urlDB = process.env.MONGODB_URL;
    await connect(urlDB);
}

export default connectDB;