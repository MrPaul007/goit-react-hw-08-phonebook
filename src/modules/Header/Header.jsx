import { NavLink } from "react-router-dom";
import useIsLogin from "../../shared/hooks/useLogin";
import UserMenu from "./UserMenu";
import LoginRegister from "./LoginRegister";

import s from "./header.module.css";

const getActive = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const Header = () => {
  const isLogin = useIsLogin();

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {isLogin && (
            <NavLink to={"/contacts"} className={getActive}>
              Contacts
            </NavLink>
          )}
          {isLogin ? <UserMenu /> : <LoginRegister />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
