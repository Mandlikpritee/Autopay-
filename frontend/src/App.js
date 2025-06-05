import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SchedulePayment from './pages/SchedulePayment';
import PaymentList from './pages/PaymentList';
import RescheduleUpdate from './pages/RescheduleUpdate';
import BulkUpload from './pages/BulkUpload';
import Reports from './pages/Reports';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load login status from localStorage on first render
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    if (savedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {isLoggedIn && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule-payment" element={<SchedulePayment />} />
            <Route path="/payment-list" element={<PaymentList />} />
            <Route path="/reschedule-update" element={<RescheduleUpdate />} />
            <Route path="/bulk-upload" element={<BulkUpload />} />
            <Route path="/reports" element={<Reports />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
