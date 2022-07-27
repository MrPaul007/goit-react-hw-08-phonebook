import { NavLink } from "react-router-dom";
import s from "./login-register.module.css";

const getActive = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const LoginRegister = () => {
  
  return (
    <div>
      <NavLink to={"/login"} className={getActive}>
        Login
      </NavLink>
      <NavLink to={"/register"} className={getActive}>
        Register
      </NavLink>
    </div>
  );
};
export default LoginRegister;
