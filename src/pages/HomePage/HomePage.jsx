import { Link } from "react-router-dom";
import s from "./homePage.module.css";
const HomePage = () => {
  return (
    <div className={`container ${s.pageContainer}`}>
      <div >
        <p className={s.text}>
          For the full access you need to{" "}
          <Link className={s.link} to={"/register"}>
            Register
          </Link>{" "}
          or{" "}
          <Link className={s.link} to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default HomePage;
