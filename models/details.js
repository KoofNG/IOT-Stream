const mongoose = require('mongoose');

// define an empty schema on order to get all the data from the collection
const dataSchema = new mongoose.Schema({
    data: [
        { pressure: Number, flowRate: Number }
    ],
}, {
    timestamps: { createdAt: '_created_at', updatedAt: '_updated_at' }
});

// define the data model based on an existing collection
const dataModel = mongoose.model('data', dataSchema);

module.exports = dataModel;
