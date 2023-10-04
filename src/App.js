import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Detail from './components/pages/detail';



function App()  {

  return (
      <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/producto/:name" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
