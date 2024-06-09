// src/components/Layouts/LoggedOffLayout/LoggedOffLayout.jsx
import { Outlet } from 'react-router-dom';
import './LoggedOffLayout.css';

function LoggedOffLayout() {
  return (
    <div className="loggedoff-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default LoggedOffLayout;
