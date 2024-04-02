import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Component/Banner';
import Header from './Component/Header';
import Plans from './Component/Plans';
import Card from './Component/card';
import Blog from './Component/Blog';
import Contact from './Component/contact';
import Bottoms from './Component/Bottoms';
import Visit from './Component/visit';
import RegisterForm from './Component/Register';
import LoginForm from './Component/login';

function App() {
  const bannerRef = useRef(null);

  const scrollToBanner = () => {
    bannerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <Header scrollToBanner={scrollToBanner} />
        <Routes>
          <Route
            path="/banner"
            element={<Banner ref={bannerRef} />}
          />
          <Route path="/card" element={<Card />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bottoms" element={<Bottoms />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
