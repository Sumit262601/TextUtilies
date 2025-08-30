import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  // Initialize mode from localStorage or default to light
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return savedMode || 'light';
  });

  // Apply theme to body on mount and theme change
  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    // Save mode to localStorage whenever it changes
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const handleToggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.title = `TextUtils - ${newMode === 'dark' ? 'Dark' : 'Light'} Mode`;
  };

  return (
    <Router>
      <div className={`App ${mode}`}>
        <Navbar
          title="TextUtils"
          mode={mode}
          aboutText="About Us"
          toggleMode={handleToggle}
        />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Text Analysis & Utilities"
                    mode={mode}
                  />
                }
              />
              <Route
                path="/about"
                element={<About mode={mode} />}
              />
            </Routes>
          </div>
        </div>
        <Toaster
          position="top-right"
          theme={mode}
          richColors
          closeButton
        />
      </div>
    </Router>
  );
}

export default App;
