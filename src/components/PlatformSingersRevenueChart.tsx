import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface PlatformSingersRevenueChartProps {
  data: Array<{ name: string; value: number }>;
}

export default function PlatformSingersRevenueChart({
  data,
}: PlatformSingersRevenueChartProps) {
  const COLORS = ['#B8860B', '#371552'];

  const totalCustomers =
    data.find((item) => item.name === 'Total Customers')?.value || 0;
  const totalSingers =
    data.find((item) => item.name === 'Total Singers')?.value || 0;

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">
        Platform Singer's & Revenue
      </h2>

      <div className="flex justify-start items-start gap-10 mb-2">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold" style={{ color: COLORS[1] }}>
            {totalCustomers.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">Customer's</span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-2xl font-bold" style={{ color: COLORS[0] }}>
            {totalSingers}
          </span>
          <span className="text-sm text-muted-foreground">Singer's</span>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === 'Total Singers' ? COLORS[0] : COLORS[1]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => value.toLocaleString()}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                padding: '8px 12px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
