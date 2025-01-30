const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    menuId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Menu', 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    price: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
