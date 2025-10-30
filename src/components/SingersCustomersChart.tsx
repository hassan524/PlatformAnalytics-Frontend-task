import { Card } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';
import { useState } from 'react';

interface SingersCustomersChartProps {
  data: Array<{
    category: string;
    newRegistered: number;
    newCustomers: number;
  }>;
}

export default function SingersCustomersChart({
  data,
}: SingersCustomersChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white border border-gray-200 rounded shadow">
          <p className="font-semibold">{label}</p>
          <p className="text-sm">
            Singer's: {payload[0].payload.newRegistered}
          </p>
          <p className="text-sm">
            Customer's: {payload[0].payload.newCustomers}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Singer's & Customer's</h2>
        <p className="text-sm text-muted-foreground">
          User registration and customer analytics
        </p>
      </div>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 20, left: -35 }}
            barCategoryGap="60%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />

            <XAxis
              dataKey="category"
              tick={{ fill: '#737373', fontSize: 12, fontWeight: 500, dy: 10 }}
              stroke="hsl(var(--muted-foreground))"
            />

            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tick={{
                fill: '#737373',
                fontSize: 12,
                fontWeight: 500,
              }}
              fontSize={12}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />

            <Bar
              dataKey="newCustomers"
              radius={[4, 4, 0, 0]}
              barSize={14}
              name="Customer's"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={hoverIndex === index ? '#5a3a9f' : '#D1D5DB'}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
