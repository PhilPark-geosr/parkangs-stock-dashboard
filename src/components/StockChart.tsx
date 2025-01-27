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
  const { data, isStale } = useFetchStocks(company);
  return (
    <>
      {/* 디버깅용 코드  */}
      {/* <h1>{isStale ? '상했어요' : '신선해요'}</h1> */}
      <h1>{company} 주식</h1>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="basDt">
          <Label value="날짜" offset={10} position="insideBottom" />
        </XAxis>
        <YAxis domain={['dataMin - 5.0', 'dataMax + 15.0']} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          key={Math.random()}
          type="monotone"
          dataKey={x1}
          stroke="#8884d8"
        />
        <Line
          key={Math.random()}
          type="monotone"
          dataKey={x2}
          stroke="#82ca9d"
        />
      </LineChart>
    </>
  );
}
