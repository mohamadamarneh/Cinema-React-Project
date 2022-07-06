import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
       {/* static components in  like Navbar and footer<Router> */}

    <Navbar />


    <Routes>
      {/* // dynamic components in <routs> */}

      <Route  path='/' element={<Home />} />
      <Route  path='/About' element={<About />} />
      <Route  path='/Contact' element={<Contact />} />

    </Routes>


    <Footer />
    </Router>
    


    </>
  );
}

export default App;
