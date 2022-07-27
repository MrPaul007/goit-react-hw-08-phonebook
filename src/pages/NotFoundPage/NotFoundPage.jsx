import { Link } from "react-router-dom";
import s from "./not-found-page.module.css";

const NotFoundPage = () => {

  return (
    <div className={s.pageContainer}>
      <h2 className={s.text}>Page not found <Link className={s.link} to={"/"}>Go Home</Link></h2>
    </div>
  );
};

export default NotFoundPage;
