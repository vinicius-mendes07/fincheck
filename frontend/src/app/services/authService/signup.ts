import { httpClient } from '../HttpClient';

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
}

export async function signup(params: SignUpParams) {
  const { data } = await httpClient.post<SignUpResponse>(
    '/auth/signup',
    params,
  );
  return data;
}
