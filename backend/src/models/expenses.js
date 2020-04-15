const {Schema, model} = require('mongoose');

const expensesSchema = new Schema({
    title: String,
    description: {
        type: String, 
        required: true,
    },
    author: String,
});

module.exports = model ('Expenses', expensesSchema);

