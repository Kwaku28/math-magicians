import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Calculator from './Components/Calculator';
import DisplayQuote from './Components/displayQuotes';
import Home from './Components/home';
import styles from './Styles/navigation.module.css';

function App() {
  return (
    <>
      <nav className={styles.navigation}>
        <h1>Math Magicians</h1>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/quotes">Quotes</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<DisplayQuote />} />
      </Routes>
    </>
  );
}

export default App;
