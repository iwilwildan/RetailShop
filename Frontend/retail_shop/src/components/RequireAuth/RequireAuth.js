import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../pages/store/auth_slice';
import { useEffect } from 'react';

function RequireAuth({ children }) {
  const token = useSelector(selectCurrentToken);
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if token is not present
    if (!token) {
      router.replace('/login');
    }
  }, [token, router]);

  // Render the children only if the user is authenticated
  return token ? <>{children}</> : null;
}

export default RequireAuth;
