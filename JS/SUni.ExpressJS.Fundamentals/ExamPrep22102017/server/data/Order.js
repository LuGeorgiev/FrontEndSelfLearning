const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    creator: { type: mongoose.SchemaTypes.ObjectId, required: [true, 'creator is required'], ref: 'User' },
    product: { type: mongoose.SchemaTypes.ObjectId, required: [true, 'product is required'], ref: 'Product' },
    dateCreated: { type: Date, default: Date.now },
    toppings: { type: [String] },
    status: { type: String, enum: ['Pending', 'In Progress', 'In Transit', 'Delivered'], default: 'Pending' }

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;