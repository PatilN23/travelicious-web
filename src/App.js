import './App.css';
import NewNav from './components/NewNav';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Destination from './components/Destination';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
      <Router>  
        <NewNav />
        <Routes>
        <Route path="/SignIn" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination/>}/>
        
          <Route path="/BookingPage/:id" element={<BookingPage />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
