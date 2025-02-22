import './App.css';
import StockChart from './components/StockChart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StockChartList from './components/StockChartList';
import Title from './components/TItle';

const queryClient = new QueryClient();
const stockItems = [
  { id: '1', company: '카카오', x1: 'clpr', x2: 'hipr' },
  { id: '2', company: 'NAVER', x1: 'clpr', x2: 'hipr' },
  { id: '3', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
  { id: '4', company: '현대차', x1: 'clpr', x2: 'hipr' },
  { id: '5', company: 'SK하이닉스', x1: 'clpr', x2: 'hipr' },
  // { id: '4', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
  // { id: '5', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
  // { id: '6', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
  // { id: '7', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
  // { id: '8', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
];
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title name={'Parkangs stocks Dash Board'} />
      <StockChartList initialItems={stockItems} />
    </QueryClientProvider>
  );
}

export default App;
