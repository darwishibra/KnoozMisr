import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import OurService from './pages/OurService';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename = "/KnoozMisr">
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "/" element = {<Home />} />
          <Route path = "/products" element = {<Products />} />
          <Route path = "/ourservice" element = {<OurService />} />
          <Route path = "/contactus" element = {<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
