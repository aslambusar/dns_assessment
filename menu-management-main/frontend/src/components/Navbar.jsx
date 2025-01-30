import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar collapse

    const toggleNavbar = () => setIsNavOpen(!isNavOpen); // Function to toggle collapse state

    const handleLinkClick = () => {
        if (isNavOpen) {
            setIsNavOpen(false); // Close navbar when a link is clicked
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ zIndex: 999 }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="/6860545013e0a63ba8cb7e94004971f7.png" 
                        alt="Logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px', objectFit: 'cover', objectPosition: '0%' }}
                    />
                    <div>
                        <span style={{ display: 'block', fontWeight: 'bold' }}><span style={{color: '#0796EF'}}>DEEP</span> NET</span>
                        <span style={{ display: 'block' }}>SOFT</span>
                    </div>
                </NavLink>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    style={{
                        backgroundColor: 'transparent', 
                        border: 'none', 
                        outline: 'none'
                    }}
                    onClick={toggleNavbar} // Toggle navbar open/close state
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse pt-4 ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/" 
                                style={({ isActive }) => ({
                                    color: isActive ? '#0796EF' : '#F5F5F5'
                                })}
                                onClick={handleLinkClick} // Close navbar when a link is clicked
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/menus"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0796EF' : '#F5F5F5'
                                })}
                                onClick={handleLinkClick}
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/create-menu"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0796EF' : '#F5F5F5'
                                })}
                                onClick={handleLinkClick}
                            >
                                Create Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/menus/:menuId/create-item" 
                                style={({ isActive }) => ({
                                    color: isActive ? '#0796EF' : '#F5F5F5'
                                })}
                                onClick={handleLinkClick}
                            >
                                Create Menu Item
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/make-reservation"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0796EF' : '#F5F5F5'
                                })}
                                onClick={handleLinkClick}
                            >
                                Make a Reservation
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/contact-us"
                                style={({ isActive }) => ({
                                    color: isActive ? '#0796EF' : '#F5F5F5'
                                })}
                                onClick={handleLinkClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
