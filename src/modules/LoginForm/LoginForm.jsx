import PropTypes from "prop-types";
import useForm from "../../shared/hooks/useForm";

import { initialState } from "./initialState";
import { fields } from "./fields";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";
import s from "./loginForm.module.css";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button text="Login" />
    </form>
  );
};

LoginForm.defaultProps = {
  onSubmit: () => {},
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
