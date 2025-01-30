const express = require('express');
const Menu = require('../models/Menu');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

// Create a new menu
// router.post('/menus', async (req, res) => {
//     const { name, description } = req.body;
//     try {
//         const menu = new Menu({ name, description });
//         await menu.save();
//         res.status(201).json(menu);
//     } catch (error) {
//         res.status(500).json({ error: 'Error creating menu' });
//     }
// });
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
        // Check if menuId exists in the Menu collection
        const menu = await Menu.findById(menuId);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        // Create the menu item
        const menuItem = new MenuItem({ menuId, name, description, price, category });
        await menuItem.save();
        
        res.status(201).json(menuItem); // Successfully created menu item
    } catch (error) {
        console.error('Error creating menu item:', error);  // Log the error message
        res.status(500).json({ error: `Error creating menu item: ${error.message}` }); // Send the error message
    }
});


// Fetch items for a specific menuId
router.get('/menus/:menuId/items', async (req, res) => {
    const { menuId } = req.params;  // Extract menuId from the URL
    try {
        // Fetch items for the given menuId
        const items = await MenuItem.find({ menuId }); // Find items associated with the menuId
        res.status(200).json(items);  // Return the items
    } catch (error) {
        res.status(500).json({ error: 'Error fetching items for menu' });
    }
});


// Fetch all distinct categories from MenuItem collection
router.get('/categories', async (req, res) => {
    try {
        const categories = await MenuItem.distinct('category'); // Fetch unique categories
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
});
// Delete a menu
router.delete('/menus/:menuId', async (req, res) => {
    const { menuId } = req.params;
    try {
        // Find and delete the menu
        const menu = await Menu.findByIdAndDelete(menuId);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        // Optionally, delete associated menu items
        await MenuItem.deleteMany({ menuId }); // This deletes all items linked to the menu

        res.status(200).json({ message: 'Menu and its items deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu:', error);
        res.status(500).json({ error: 'Error deleting menu' });
    }
});

// Delete a menu item
router.delete('/menus/:menuId/items/:itemId', async (req, res) => {
    const { menuId, itemId } = req.params;
    try {
        // Check if the menu exists
        const menu = await Menu.findById(menuId);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        // Delete the menu item
        const menuItem = await MenuItem.findByIdAndDelete(itemId);
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Error deleting menu item' });
    }
});


module.exports = router;
