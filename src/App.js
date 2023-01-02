import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import Products from './components/Products/Products';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <img src={logo} alt='logo' />
        <h1>DODO SOCKS</h1>
        <div className='nav_bar'>
          <Link className='nav_link' to={'/'}>
            Головна
          </Link>
          <Link className='nav_link' to={'/products'}>
            Товари
          </Link>
          <Link className='nav_link' to={'/contacts'}>
            Контакти
          </Link>
        </div>
      </div>

      <Routes>
        <Route exact path='*' element={<Main />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/contacts' element={<Contacts />}></Route>
      </Routes>
      <div className='footer'>
        <h2>© 2020 Dodo Socks | Made with ♥ in Ukraine</h2>
      </div>
    </div>
  );
}

export default App;
