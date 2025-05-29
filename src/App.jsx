import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Nave from './layouts/Nave';
import BottomNav from './layouts/BottomNav';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  //  background color
  useEffect(() => {
    document.body.style.backgroundColor = '#0b2042';
  }, []);

  //  navigation between pages
  useEffect(() => {
    if (hasNavigated) {
      // Skip loading when navigating to home
      if (location.pathname === '/' && previousPath !== '/') {
        setIsNavigating(false);
      } else {
        setIsNavigating(true);
        const timer = setTimeout(() => {
          setIsNavigating(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      setHasNavigated(true);
    }
    setPreviousPath(location.pathname);
  }, [location.pathname, hasNavigated, previousPath]);

  return (
    <div className="bg-[#0b2042] min-h-screen">
      <Nave />
      <AnimatePresence mode="wait">
        {isNavigating && <LoadingScreen key="loading" />}
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <BottomNav />
    </div>
  );
};

export default App;