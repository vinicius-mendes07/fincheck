import { cn } from '../../../../app/utils/cn';
import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../components/icons/BankAccountTypeIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
}
export function AccountCard({ color, name, balance, type }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="bg-white p-4 rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 tracking-[-0.5px] font-medium mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            'text-gray-800 tracking-[-0.5px] font-medium block',
            !areValuesVisible && 'blur-sm',
          )}
        >
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
