import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/booking">Booking</Link></li>
                    <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                    <li><Link to="/dashboard/AddReview">Add Review</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/MakeAdmin">MakeAdmin</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;