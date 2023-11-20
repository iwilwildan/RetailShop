import { Layout } from '../../layout/Layout';
import { Provider } from 'react-redux';
import store from '../store';
import ProductList from '../../components/Products/ProductList/ProductList';
import RequireAuth from '../../components/RequireAuth/RequireAuth';

const Admin = () => {
  return (
    <RequireAuth>
      <ProductList></ProductList>
    </RequireAuth>
  );
};

export default Admin;
