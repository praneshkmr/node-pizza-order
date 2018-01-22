import mongoose from 'mongoose';

let PizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['VEG', 'NON-VEG']},
    size: { type: String, required: true, enum: ['S', 'M', 'L', 'XL'] }
});

export default mongoose.model('pizza', PizzaSchema);