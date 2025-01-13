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
  const [count, setCount] = useState(0);

  const WelcomePage = () => (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Model With Ruki Academy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="navigation-links">
        <Link to="/dashboard" className="nav-link">Go to Dashboard</Link>
        <Link to="/students" className="nav-link">Manage Students</Link>
        <Link to="/payments" className="nav-link">Payment Management</Link>
        <Link to="/attendance" className="nav-link">Track Attendance</Link>
        <Link to="/courses" className="nav-link">Course Management</Link>
        <Link to="/communication" className="nav-link">Communication</Link>
      </div>
      <p className="read-the-docs">
        Click on the links above to navigate through the academy management system
      </p>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
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