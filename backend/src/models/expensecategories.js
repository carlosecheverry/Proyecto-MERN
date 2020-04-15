const {Schema, model} = require('mongoose');

const expensecategoriesSchema = new Schema({
    title: String,
    description: {
        type: String, 
        required: true,
        trim: true,
    },
});

module.exports = model ('Expense Categories', expensecategoriesSchema);