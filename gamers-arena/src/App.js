
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import "./index.css";
import Home from './components/Home';
import Membership from './components/Membership';
import EventPage from './components/EventPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/eventpage'  element={<EventPage/>} />
          <Route path='/contactus'  element={<ContactUs/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>

  )
}

export default App