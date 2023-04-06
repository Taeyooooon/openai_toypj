import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Container from './components/Container';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
