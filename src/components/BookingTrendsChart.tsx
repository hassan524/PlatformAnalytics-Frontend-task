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

interface BookingTrendsChartProps {
  data: Array<{ month: string; bookings: number }>;
}

export default function BookingTrendsChart({ data }: BookingTrendsChartProps) {
  return (
    <Card className="p-6">
      {/* ===== Header ===== */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Booking Trends</h2>
        <p className="text-sm text-muted-foreground">
          Monthly booking patterns and trends
        </p>
      </div>

      {/* ===== Chart ===== */}
      <div className="w-full min-h-[260px]">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 20, left: -25 }}
          >
            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB" // <-- changed color to visible gray
              horizontal={true}
              vertical={true}
            />

            {/* X-Axis */}
            <XAxis
              dataKey="month"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 12, fontWeight: 500, dy: 10 }}
            />

            {/* Y-Axis */}
            <YAxis
              domain={[0, 'dataMax + 100']}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tick={{
                fill: '#737373',
                fontSize: 12,
                fontWeight: 500,
                dx: -4,
              }}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#35144F"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
