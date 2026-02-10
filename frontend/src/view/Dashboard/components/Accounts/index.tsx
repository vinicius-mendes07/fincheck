import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error just types
import 'swiper/css';

import { SliderNavigation } from './SliderNavigation';
import { EyeIcon } from '../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { useAccountsController } from './useAccountsController';
import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { cn } from '../../../../app/utils/cn';
import { Spinner } from '../../../components/Spinner';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-8 py-4 flex flex-col">
      {isLoading && (
        <div className="h-full flex items-center justify-center">
          <Spinner className="w-10 h-10 text-teal-950/50 fill-white" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-2xl tracking-[-1px] text-white',
                  !areValuesVisible && 'blur-md',
                )}
              >
                {formatCurrency(1000)}
              </strong>

              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                onSlideChange={(swiper) => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <div
                  className="flex items-center justify-between mb-4"
                  slot="container-start"
                >
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>

                  <SliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>
                <SwiperSlide>
                  <AccountCard
                    color="#7950f2"
                    name="Nubank"
                    balance={1000.23}
                    type="CHECKING"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard
                    color="#333"
                    name="XP"
                    balance={1000.23}
                    type="INVESTMENT"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard
                    color="#0f0"
                    name="Carteira"
                    balance={1000.23}
                    type="CASH"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
