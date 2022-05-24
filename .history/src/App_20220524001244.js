import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import Purchase from './Pages/Products/Purchase';
import Footer from './Pages/Shared/Footer';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
        </Route>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

      </Routes>
      < />
      <Footer></Footer>
    </div>
  );
}

export default App;
