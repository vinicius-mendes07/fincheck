import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
}
export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const value = useMemo(
    () => ({
      areValuesVisible,
      toggleValuesVisibility,
    }),
    [areValuesVisible, toggleValuesVisibility],
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
