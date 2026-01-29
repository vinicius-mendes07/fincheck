import { QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './app/contexts/AuthContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './app/services/queryClient';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
