import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import Portfolio from './Pages/Portfolio';
import NotFound from './Pages/Shared/NotFound';

import AddReview from './Pages/Dashboard/AddReview';
import Blogs from './Pages/Blogs';
import Parches from './Pages/Products/Parches';
import ProductDetail from './Pages/Products/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/My Profile';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="parches/:id"element={
          <RequireAuth>
          <ProductDetail/>
          </RequireAuth>
        } /> 
         <Route path="parches"element={
          <RequireAuth>
          <Parches/>
          </RequireAuth>
        } /> 
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          </Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
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
