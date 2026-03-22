export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
  currentBalance: number;
}
