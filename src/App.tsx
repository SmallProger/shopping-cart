import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Store} from './pages/Store';
import {useEffect} from 'react';
import {Container} from '@mui/system';
import {Navbar} from './components/Navbar';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Drawer from '../src/components/Drawer';
function App() {
  useEffect(() => {
    console.log('here');
  });
  return (
    <Provider store={store}>
      <div className='App'>
        <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
          </Routes>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
