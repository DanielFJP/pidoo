import React from 'react'
import Login from './components/login/Login'
import Registro from './components/registro/Registro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
          </Routes>
      </Router>
  );
}

export default App