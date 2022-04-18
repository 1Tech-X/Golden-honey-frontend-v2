import { Home } from './Components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';
import Header from './Components/Header/Header';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
            <NavbarMenu />
            <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />}  />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
