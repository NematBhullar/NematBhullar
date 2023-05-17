import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path='/resume' element={<RegisterPage />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
