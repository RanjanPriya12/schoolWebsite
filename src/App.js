
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import { About } from './components/About/About';


function App() {
  return (
    <div className="App">
      
      <h1 className='h1'>माँ फूलझरी देवी स्कूल</h1>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
