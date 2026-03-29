import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../app/hooks/useWindowWidth.ts';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useBankAccounts } from '../../../../app/hooks/useBankAccounts.ts';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const windowWidth = useWindowWidth();

  const { accounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0,
    );
  }, [accounts]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: accounts,
    openNewAccountModal,
    currentBalance,
  };
}
