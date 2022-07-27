import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/auth-selector';

const useLogin = () => {
  return useSelector(isLogin);
};

export default useLogin;
