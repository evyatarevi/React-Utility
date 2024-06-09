// src/pages/Login/Login.jsx
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <Link to='/app' className='hacked-login'>
            Hack Login
        </Link>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
