import { useFetchStocks } from '@/hooks/stock';

interface KpiCardProps {
  company: string;
}

const KpiCard = ({ company }: KpiCardProps) => {
  const { data } = useFetchStocks(company);

  const dataSortedByDate = data?.sort(
    (a, b) => Number(b.basDt) - Number(a.basDt),
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{company}</h2>
      {dataSortedByDate && (
        <>
          <p className="text-3xl font-bold text-blue-600">
            {dataSortedByDate[0].mkp}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            전일 대비{' '}
            {Number(dataSortedByDate[0].vs) >= 0
              ? `↑${dataSortedByDate[0].vs}원`
              : `↓${dataSortedByDate[0].vs}원`}
          </p>
        </>
      )}
    </div>
  );
};

export default KpiCard;
