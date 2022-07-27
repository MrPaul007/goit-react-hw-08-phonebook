import useForm from "../../shared/hooks/useForm";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { initialState } from "./initialState";
import { fields } from "./fields";

import useLogin from "../../shared/hooks/useLogin";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import s from "./registerForm.module.css";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const isLogin = useLogin();
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  const { name, email, password } = state;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <p className={s.text}>Already have an account? <Link className={s.link} to="/login">Log in</Link></p>
      <Button text="Register" />
    </form>
  );
};

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
