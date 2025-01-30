import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMenus, createMenuItem } from '../utils/api';

const CreateMenuItem = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [menuId, setMenuId] = useState('');
    const [menus, setMenus] = useState([]);
    const [message, setMessage] = useState('');

    // Fetch menus on component mount
    useEffect(() => {
        const loadMenus = async () => {
            try {
                const response = await getMenus();
                setMenus(response.data);
            } catch (error) {
                console.error('Error fetching menus:', error);
            }
        };
        loadMenus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !description || !price || !menuId) {
            setMessage('Please fill in all fields and select a menu');
            return;
        }

        try {
            await createMenuItem(menuId, { name, description, price });
            setMessage('Menu item created successfully!');
            setName('');
            setDescription('');
            setPrice('');
            setMenuId('');

            setTimeout(() => {
                navigate(`/menus`);
            }, 2000);
        } catch (error) {
            console.error('Error creating menu item:', error);
            setMessage('Failed to create menu item');
        }
    };

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <h2 className="mb-4">Create Menu Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Item Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        id="price"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="menu" className="form-label">Select Menu</label>
                    <select
                        id="menu"
                        className="form-select"
                        value={menuId}
                        onChange={(e) => setMenuId(e.target.value)}
                    >
                        <option value="">Select a menu</option>
                        {menus.map((menu) => (
                            <option key={menu._id} value={menu._id}>
                                {menu.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create Item</button>
            </form>
            {message && (
                <div className="mt-3">
                    <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {message}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateMenuItem;
