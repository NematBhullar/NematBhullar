import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Designs from './Designs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/contact-me' element={<LoginPage />} />
        <Route path='/resume' element={<RegisterPage />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/designs' element={<Designs />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
