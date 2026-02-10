import { useState } from 'react';
import { useWindowWidth } from '../../../../app/hooks.ts/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { areValuesVisible, toggleValuesVisibility } = useDashboard();

  const windowWidth = useWindowWidth();

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
  };
}
