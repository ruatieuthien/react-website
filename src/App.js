
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Footer from "./common/footer/Footer";
import Navbar from './common/Navbar/Navbar';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/Blog-single-page/BlogSingle";
import Contact from "./components/Contact/Contact";
import Destinations from "./components/Destinations/Home";
import Gallery from "./components/gallery/Gallery";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Home from "./components/pages/Home";
import Testimonial from "./components/Testimonial/Testimonial";
import SinglePages from "./SinglePage/SinglePages";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/destinations' element={<Destinations />}></Route>
        <Route exact path='/singlepage/:id' element={<SinglePages />}></Route>
        <Route exact path='/blog' element={<Blog />}></Route>
        <Route exact path='/blogsingle/:id' element={<BlogSingle />}></Route>
        <Route exact path='/testimonail' element={<Testimonial />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/sign-in' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
