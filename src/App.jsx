import { useState } from "react";
import {Routes, Route,BrowserRouter as Router, Outlet,useNavigate} from "react-router-dom";
import Login from './Pages/Auth/Login'
// import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import FundGateMain from './Pages/Tools/FundGate/Main'
import FundGateLogs from "./Pages/Tools/FundGate/Logs";
import AuthProvider from "./Pages/Auth/AuthProvider";
import Logs from "./Pages/Logs/Logs"
// import Courses from './Pages/Courses'
// import Posts from './Pages/Posts'
// import Profile from './Pages/Profile'

function App() {
  return (
    <Router basename="/crm-web">
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tools/fundgate/main" element={<FundGateMain />} />
            <Route path="/tools/fundgate/logs" element={<FundGateLogs />} />
            <Route path= "/logs" element={<Logs/>}/>
          </Routes>
        </AuthProvider>
 
    </Router>
  );
}

export default App;
