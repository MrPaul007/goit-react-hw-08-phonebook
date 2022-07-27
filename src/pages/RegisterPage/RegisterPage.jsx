import { useDispatch } from "react-redux";
import { createUser } from "../../redux/auth/auth-operation";
import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {
  const dispath = useDispatch();
  const handleSubmit = (data) => {
    dispath(createUser(data));
  };
  return (
    <div className="container">
      <h2>Registration</h2>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};
export default RegisterPage;
