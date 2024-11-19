import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
});

export default mongoose.model('Newsletter', newsletterSchema);