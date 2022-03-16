import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";

import Home from './components/Home/Home'
import About from './components/About/About'
import Users from './components/Users/Users'
import UserDetail from './components/UserDetail/UserDetail';


function App() {
  return (
    <div className='App'>
      <nav>
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/users">Users</NavLink>
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
