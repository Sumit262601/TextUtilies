import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'; // Ensure the correct path is used
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#316e69";
      document.body.style.color = "white";
      showAlert("Dark Mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} aboutText="About Us" toggleMode={handleToggle} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the analysis" />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
