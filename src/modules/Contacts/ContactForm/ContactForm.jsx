import { memo } from "react";
import PropTypes from "prop-types";

import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button";

import useForm from "../../../shared/hooks/useForm";

import { initialState } from "./initialState";
import { fields } from "./fields";

import s from "./contactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });
  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={number} onChange={handleChange} {...fields.number} />
      <Button text="Add contact" />
    </form>
  );
};

ContactForm.defaultProps = {
  onSubmit: () => {},
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(ContactForm);
