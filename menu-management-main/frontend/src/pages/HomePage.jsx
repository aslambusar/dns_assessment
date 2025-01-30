import React from 'react';

const HomePage = () => {
    return (
        <div 
            className="home-container" 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                paddingTop: '100px', 
                textAlign: 'center', 
                backgroundImage: 'url("/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpg")',
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '100vh',  
                color: 'white',
                position: 'relative', 
            }}
        >
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                }}
            ></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1>Welcome to Menu Management System</h1>
                <p>Your go-to solution for managing menus, reservations, and more!</p>
                <p>
                    We offer an intuitive interface for restaurant menu management, reservations, and much more.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
