const express = require('express');
const Menu = require('../models/Menu');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

router.post('/menus', async (req, res) => {
    console.log('Request Body:', req.body);
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }
    try {
        const menu = new Menu({ name, description });
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        console.error('Error saving menu to database:', error);
        res.status(500).json({ error: 'Error creating menu' });
    }
});


// Fetch all menus
router.get('/menus', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching menus' });
    }
});

// Add item to menu
router.post('/menus/:menuId/items', async (req, res) => {
    const { menuId } = req.params;
    const { name, description, price, category } = req.body;
    
    try {
        const menu = await Menu.findById(menuId);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        const menuItem = new MenuItem({ menuId, name, description, price, category });
        await menuItem.save();
        
        res.status(201).json(menuItem);
    } catch (error) {
        console.error('Error creating menu item:', error);  
        res.status(500).json({ error: `Error creating menu item: ${error.message}` }); 
    }
});


router.get('/menus/:menuId/items', async (req, res) => {
    const { menuId } = req.params;  
    try {
        const items = await MenuItem.find({ menuId }); 
        res.status(200).json(items);  
    } catch (error) {
        res.status(500).json({ error: 'Error fetching items for menu' });
    }
});


router.get('/categories', async (req, res) => {
    try {
        const categories = await MenuItem.distinct('category'); 
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
});



module.exports = router;
