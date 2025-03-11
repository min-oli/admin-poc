import React, { createContext, useEffect, useState } from 'react';

// third-party
import { Auth0Provider as AuthProvider, useAuth0 } from '@auth0/auth0-react';

// project imports
import Loader from 'components/Loader';

// types
import { Auth0ContextType, InitialLoginContextProps } from 'types/auth';

// constant

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// ==============================|| AUTH0 CONTEXT & PROVIDER ||============================== //

const Auth0Context = createContext<Auth0ContextType | null>(null);

export const Auth0Provider = ({ children }: { children: React.ReactElement }) => {
  return (
    <AuthProvider
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN as string}
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Auth0ContextProvider>{children}</Auth0ContextProvider>
    </AuthProvider>
  );
};

const Auth0ContextProvider = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated, user, isLoading, loginWithPopup, logout } = useAuth0();

  // State to track the authentication status and user information
  const [state, setState] = useState<InitialLoginContextProps>(initialState);

  useEffect(() => {
    if (!isLoading) {
      // Update state when authentication status is available
      setState({
        isLoggedIn: isAuthenticated,
        isInitialized: true,
        user: isAuthenticated
          ? {
              id: user?.sub,
              avatar: user?.picture,
              email: user?.email,
              name: user?.name,
              tier: 'Premium' // Set tier or other user-specific data if needed
            }
          : null
      });
    }
  }, [isAuthenticated, isLoading, user]);

  const loginAuth = async (options?: any) => {
    await loginWithPopup(options);
  };

  const logoutAuth = () => {
    logout();
  };

  const resetPassword = async (email: string) => {
    // Implement reset password functionality if needed
  };

  const updateProfile = () => {
    // Implement update profile functionality if needed
  };

  if (isLoading || !state.isInitialized) {
    return <Loader />;
  }

  const contextValue: Auth0ContextType = {
    ...state, // Spread the current state (isLoggedIn, isInitialized, user)
    loginAuth,
    logout: logoutAuth,
    resetPassword,
    updateProfile
  };

  return <Auth0Context.Provider value={contextValue}>{children}</Auth0Context.Provider>;
};

export default Auth0Context;
