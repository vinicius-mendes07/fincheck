import { httpClient } from '../HttpClient';

type BankAccountsResponse = Array<{
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
  currentBalance: number;
}>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountsResponse>('/bank-accounts');

  return data;
}
