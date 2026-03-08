import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { capitalizeFirstLetter } from '../../app/utils/capitalizeFirstLetter';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={(date) => onChange?.(date ?? new Date())}
      navLayout="after"
      components={{
        Chevron: (props) =>
          props.orientation === 'left' ? (
            <ChevronLeftIcon {...props} />
          ) : (
            <ChevronRightIcon {...props} />
          ),
      }}
      classNames={{
        month: 'relative w-fit',
        month_caption:
          'text-gray-900 tracking-[-0.408px] font-medium h-10 block flex items-center',
        nav: 'flex gap-1 absolute top-0 right-0',
        chevron: 'text-teal-800 w-6 h-6',
        button_previous:
          'flex items-center justify-center !bg-transparent cursor-pointer w-10 h-10 hover:bg-teal-100 rounded-full',
        button_next:
          'flex items-center justify-center !bg-transparent cursor-pointer w-10 h-10 hover:bg-teal-100 rounded-full',
        weekday: 'uppercase text-xs text-gray-500 font-medium pt-1 pb-2',
        day_button: 'w-full h-full rounded-full',
        day: 'text-gray-700 cursor-pointer w-10 h-10 hover:bg-teal-100 rounded-full text-center',
        today: 'bg-gray-100 font-bold text-gray-900',
        selected: '!bg-teal-900 text-white font-medium',
        outside: 'pointer-events-none',
      }}
      formatters={{
        formatCaption: (date, options) => {
          return capitalizeFirstLetter(format(date, 'LLLL yyyy', options));
        },
      }}
    />
  );
}
