import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import OurService from './pages/OurService';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<OurService />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/products" element = {<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
