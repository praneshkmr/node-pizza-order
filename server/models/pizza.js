import mongoose from 'mongoose';

let PizzaSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['VEG', 'NON-VEG'] },
    size: { type: String, required: true, enum: ['S', 'M', 'L', 'XL'] },
    price: { type: Number, required: true }
});

export default mongoose.model('pizza', PizzaSchema);