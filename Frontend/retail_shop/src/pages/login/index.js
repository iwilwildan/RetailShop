import { Layout } from '../../layout/Layout';
import { Provider } from 'react-redux';
import store from '../store';
import LoginForm from '../../components/Login/LoginForm';

const Login = () => {
  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
};

export default Login;
