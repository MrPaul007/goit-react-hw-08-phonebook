import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCurrentUser } from "./redux/auth/auth-operation";

import Header from "./modules/Header";
import UserRoutes from "./UserRoutes";

import "./index.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
};

export default App;
