
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./conponents/Navbar";
import HomePage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// toast config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import UpdateProducts from "./pages/admin/update_product/UpdateProducts";

function App() {
  return (
    <Router>

      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* Admin routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/update/:id' element={<UpdateProducts/>}/>
      </Routes>

    </Router>
  );
}

export default App;
