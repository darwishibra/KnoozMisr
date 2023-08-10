import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Products />} />
          <Route path = "/home" element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
