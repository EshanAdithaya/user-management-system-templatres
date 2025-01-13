import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import components
import DashboardLayout from './components/Dashboard/DashboardLayout';
import StudentManagement from './components/Students/StudentManagement';
import PaymentManagement from './components/Payments/PaymentManagement';
import AttendanceTracking from './components/Attendance/AttendanceTracking';
import CourseManagement from './components/Courses/CourseManagement';
import CommunicationSystem from './components/Communication/CommunicationSystem';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/students" element={<StudentManagement />} />
        <Route path="/payments" element={<PaymentManagement />} />
        <Route path="/attendance" element={<AttendanceTracking />} />
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/communication" element={<CommunicationSystem />} />
      </Routes>
    </Router>
  );
}

export default App;