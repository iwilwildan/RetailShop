import Theme from '../styles/theme';
import { Layout } from '../layout/Layout';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { useRouter } from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <>
      <Theme>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {isLoginPage ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </PersistGate>
        </Provider>
      </Theme>
    </>
  );
}
