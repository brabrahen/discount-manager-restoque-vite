import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useLoginContext } from "./contexts/login-context";
import { useSwitchContext } from "./contexts/product-switch";
import { useProductContext } from "./contexts/product-modal";
import NavBar from './shared/navbar';
import Footer from './shared/footer';
import Login from './components/login';
import LoginMessage from './shared/login-message';
import Dashboard from './components/dashboard/dashboard';
import Product from "./components/product/product";
import ProductSwitch from "./components/product/product-switch";
import AboutUs from './pages/about-us';
// import Splash from "./shared/loaders/splash";

import './App.css';
import AdminProfile from './pages/admin-profile';

const App = () => {

  const { login } = useLoginContext();
  const { switchProduct } = useSwitchContext();
  const { product } = useProductContext();

  return (
    <BrowserRouter>
      {/* <Splash /> */}
        { login ? <NavBar /> : <LoginMessage /> }
          <div className="main">
            <Routes>
              <Route path="/" element={login ? <Dashboard /> : <Login />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/adm" element={<AdminProfile />} />
            </Routes>
          </div>
        { product ? <Product /> : null }
        { switchProduct ? <ProductSwitch /> : null}
        {}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
