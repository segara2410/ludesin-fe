import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Discover from './pages/Discover';

import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';

export default function App() {
  const location = useLocation();
  const routesWithoutNavbar = ['/login', '/register'];

  return (
    <>
      {!routesWithoutNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
