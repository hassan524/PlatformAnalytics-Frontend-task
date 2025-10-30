import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface MonthlyRevenueChartProps {
  data: Array<{ month: string; revenue: number }>;
}

export default function MonthlyRevenueChart({
  data,
}: MonthlyRevenueChartProps) {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Monthly Revenue</h2>
        <p className="text-sm text-muted-foreground">
          Revenue trends over time
        </p>
      </div>

      <div className="w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 10, left: 5 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e0e0e0"
              horizontal
              vertical
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#737373',
                fontSize: 12,
                fontWeight: 500,
                dy: 20,
              }}
              fontSize={12}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#737373',
                fontSize: 12,
                fontWeight: 500,
                dx: -19,
              }}
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              formatter={(value) => [`$${value}`, 'Revenue']}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: '#6366f1', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
