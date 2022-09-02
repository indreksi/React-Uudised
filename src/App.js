import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';

function App() {
  return (
    <div className='container'>
      <nav className='nav'>
        <Link to='/' className='site-title'>
          <a>Chicago Tribune</a>
        </Link>
        <ul>
          <Link to='/' className='nav-link'>
            <a>Avaleht</a>
          </Link>
          <Link to='/uudised'>
            <a>Uudised</a>
          </Link>
          <Link to='/kontakt'>
            <a>Kontakt</a>
          </Link>
          <Link to='/meist'>
            <a>Meist</a>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path='' element={<Avaleht />} />
        <Route path='uudised' element={<Uudised />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='meist' element={<Meist />} />
      </Routes>
    </div>
  );
}

export default App;
