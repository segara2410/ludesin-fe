import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d9c48',
      dark: '#0b8c40',
    },
  },
});

export default function App() {
  const location = useLocation();
  const routesWithoutNavbar = ['/login', '/register'];

  return (
    <ThemeProvider theme={theme}>
      {!routesWithoutNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </ThemeProvider>
  );
}
