import mongoose from 'mongoose';

let CounterSchema = new mongoose.Schema({
    entity: {type: String, required: true },
    count: {type: Number, required: true, default: 0 },
});

export default mongoose.model('counter', CounterSchema);