import mongoose from 'mongoose';

let OrderSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    customer: { type: Number, required: true },
    items: [{
        id: { type: Number, required: true },
        pizza: { type: Number, required: true },
        quantity: { type: Number, required: true },
        itemPrice: { type: Number, required: true },
        price: { type: Number, required: true },
        status: { type: String, required: true, enum: ['placed', 'dough-prep', 'oven-bake', 'topping-art', 'ready'] },
    }],
    status: { type: String, required: true, enum: ['placed', 'preparing', 'in-oven', 'decorating', 'ready', 'cancelled'] },
    totalPrice: { type: Number, required: true },
});

export default mongoose.model('order', OrderSchema);