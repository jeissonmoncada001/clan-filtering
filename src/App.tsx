import React from 'react';
import HomePage from './pages/HomePage';
import { QueryClientProvider, QueryClient } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
};

export default App;
