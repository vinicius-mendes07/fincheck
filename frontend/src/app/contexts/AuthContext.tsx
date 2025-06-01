import { ReactNode, useCallback, useMemo, useState } from 'react';
import { AuthContext } from './AuthContextValue';
import { localStorageKeys } from '../config/localStorageKeys';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );
    return !!storedAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  const value = useMemo(
    () => ({ signedIn, signin, signout }),
    [signedIn, signin, signout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
