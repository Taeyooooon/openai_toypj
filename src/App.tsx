import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainContainer from './components/MainContainer';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <MainContainer />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
