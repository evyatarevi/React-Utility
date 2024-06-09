import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './LoggedInLayout.css';

function LoggedInLayout() {
  return (
    <div className="loggedin-layout">
      <header>
        <nav>
          <ul>
            <li><NavLink className="home-link" to="/app">Logo</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "active-page": ""} to="/app/profile">Profile</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "active-page": ""} to="/app/search">Search</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "active-page": ""} to="/app/pokemon">Pokemon</NavLink></li>
          </ul>
          <ul>
            <li><Link to="/">Logout👋</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default LoggedInLayout;