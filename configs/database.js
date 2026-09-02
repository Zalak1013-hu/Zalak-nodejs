import mongoose from "mongoose"

const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/employeDB");
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

export default db();