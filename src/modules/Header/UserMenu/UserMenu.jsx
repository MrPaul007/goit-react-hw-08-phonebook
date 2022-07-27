import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../../redux/auth/auth-operation";
import { getCurrent } from "../../../redux/auth/auth-selector";

import s from "./userMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  const user = useSelector(getCurrent).user;
  const { email } = user;
  return (
    <div className={s.userMenu}>
      <p className={s.email}>{email}</p>
      <button onClick={handleClick} className={s.button} type="button">
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
