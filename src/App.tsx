import './App.css';
import StockChart from './components/StockChart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StockChart
        key={Math.random()}
        company={'카카오'}
        x1={'clpr'}
        x2={'hipr'}
      />
      <StockChart
        key={Math.random()}
        company={'NAVER'}
        x1={'clpr'}
        x2={'hipr'}
      />
      <StockChart
        key={Math.random()}
        company={'삼성전자'}
        x1={'clpr'}
        x2={'hipr'}
      />
    </QueryClientProvider>
  );
}

export default App;
