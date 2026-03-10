import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import WorkerDashboard from './pages/WorkerDashboard';
import Policy from './pages/Policy';
import Simulation from './pages/Simulation';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<WorkerDashboard />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
