import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMenu } from '../utils/api';

const CreateMenu = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!name || !description) {
    //         setMessage('Please fill in both fields');
    //         return;
    //     }

    //     try {
    //         await createMenu({ name, description });
    //         setMessage('Menu created successfully!');
    //         setName('');
    //         setDescription('');
    //         setTimeout(() => {
    //             navigate('/menus'); 
    //         }, 2000);
    //     } catch (error) {
    //         console.error('Error creating menu:', error);
    //         setMessage('Failed to create menu');
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!name || !description) {
          setMessage('Please fill in both fields');
          return;
        }
      
        try {
          await createMenu({ name, description });
          setMessage('Menu created successfully!');
          setName('');
          setDescription('');
          setTimeout(() => {
            navigate('/menus');
          }, 2000);
        } catch (error) {
          console.error('Error creating menu:', error.response ? error.response.data : error.message);
          setMessage(`Failed to create menu: ${error?.response?.data?.error || error.message}`);
        }
      };
      
    return (
        <div className="container pt-5" style={{ marginTop: '80px' }}>
            <h2 className="mb-4">Create Menu</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Menu Name</label>
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
                <button type="submit" className="btn btn-primary">Create Menu</button>
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

export default CreateMenu;
