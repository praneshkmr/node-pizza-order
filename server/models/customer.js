import mongoose from 'mongoose';

let CustomerSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true }
});

export default mongoose.model('customer', CustomerSchema);