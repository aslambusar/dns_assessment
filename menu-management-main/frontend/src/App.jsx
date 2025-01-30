import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import CreateMenu from './components/CreateMenu';
import CreateMenuItem from './components/CreateMenuItem';
import HomePage from './pages/HomePage'; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<MenuList />} />
        <Route path="/create-menu" element={<CreateMenu />} />
        <Route path="/menus/:menuId/create-item" element={<CreateMenuItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
