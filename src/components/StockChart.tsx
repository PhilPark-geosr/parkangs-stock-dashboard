import { useFetchStocks } from '@/hooks/stock';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
  Tooltip,
  Label,
  ResponsiveContainer,
} from 'recharts';

export default function StockChart({
  company,
  x1,
  x2,
}: {
  company: string;
  x1: string;
  x2: string;
}) {
  const { data } = useFetchStocks(company);

  return (
    <div className="block w-full bg-white border-black-500 border-2 rounded-lg text-lg p-4">
      <h2>{company} 주식</h2>
      <ResponsiveContainer width="101%" aspect={4 / 3}>
        <LineChart data={data}>
          <XAxis dataKey="basDt" style={{ fontSize: '13px' }}>
            <Label
              value="날짜"
              offset={-3}
              position="insideBottom"
              style={{ fontSize: '13px' }}
            />
          </XAxis>
          <YAxis
            domain={['dataMin - 5.0', 'dataMax + 15.0']}
            style={{ fontSize: '13px' }}
          />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey={x1} stroke="#8884d8" />
          <Line type="monotone" dataKey={x2} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
