import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/react-router';

import StockChartList from './components/StockChartList';
import KpiCard from './components/KpiCard';

const queryClient = new QueryClient();
const stockItems = [
  { id: '1', company: '카카오', x1: 'clpr', x2: 'hipr' },
  { id: '2', company: 'NAVER', x1: 'clpr', x2: 'hipr' },
  { id: '3', company: '삼성전자', x1: 'clpr', x2: 'hipr' },
  { id: '4', company: '현대차', x1: 'clpr', x2: 'hipr' },
  { id: '5', company: 'SK하이닉스', x1: 'clpr', x2: 'hipr' },
];

const companies = [
  { id: '1', company: '카카오' },
  { id: '2', company: 'NAVER' },
  { id: '3', company: '삼성전자' },
];

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <QueryClientProvider client={queryClient}>
        {/* 주요성과지표 (Key Performance Indicator) */}
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {companies.map((obj) => (
              <KpiCard key={obj.id} company={obj.company} />
            ))}
          </div>
        </div>

        <StockChartList initialItems={stockItems} />
      </QueryClientProvider>
    </>
  );
}

export default App;
