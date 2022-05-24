import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Products/Purchase';
import Footer from './Pages/Shared/Footer';
import Portfolio from './Pages/Portfolio';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import ComputerParts from './Pages/Home/ComputerParts';
import NotFound from './Pages/Shared/NotFound';
import Admin from './Pages/Dashboard/Admin';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';

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
         <Route path="Product/:id"element={
          <RequireAuth>
            <ProductDetails/>
          </RequireAuth>
        } /> 
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          
          
          <Route path="addProduct" element={<Admin></Admin>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          
          
        </Route>
      
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={< NotFound/>} />
      </Routes>
     
      <Footer></Footer>
    </div>
  );
}

export default App;