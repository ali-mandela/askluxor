import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LayoutContainer from '../../components/Layout';
import style from '../styles/component.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';

const AgentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);  
  const userInfo = user ? user.userInfo : null;  

  const links = !localStorage.getItem('token') && !userInfo ? [
    { id: 1, name: "login", path: "/agent/login" },
    { id: 2, name: "register", path: "/agent/register" },
  ] : userInfo?.role === "ADMIN" ? [
    { id: 1, name: "Admin Dashboard", path: "/agent/admin/dashboard" }, 
  ] : [
    { id: 1, name: "post a property", path: "/agent/post-a-property" },
    { id: 2, name: "my properties", path: "/agent/my-properties" },
    { id: 3, name: "profile", path: "/agent/profile" },
  ];

  const activeLinkStyle = {
    color: 'black',
    textDecoration: 'underline',
  };

  return (
    <LayoutContainer bgColor={"#91B029"}>
      <div className={style.navbarContainer}>
        <h1><Link to={'/'}>askLuxor</Link></h1>
        <div className={style.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${style.menus} ${menuOpen ? style.menuOpen : ''}`}>
          {links.map((i) => (
            <li key={i.id}>
              <NavLink
                to={i.path}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {i.name}
              </NavLink>
            </li>
          ))}
          {localStorage.getItem('token') && (
            <li>
              <Link
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/'; // Ensure navigation to the home page
                }}
              >
                logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </LayoutContainer>
  );
};

export default AgentNavbar;
