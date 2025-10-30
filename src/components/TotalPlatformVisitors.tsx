import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

interface TotalPlatformVisitorsChartProps {
  data: Array<{ date: string; visitors: number }>;
}

export default function TotalPlatformVisitorsChart({
  data,
}: TotalPlatformVisitorsChartProps) {
  const [activeFilter, setActiveFilter] = useState('Last 3 months');

  return (
    <Card className="p-2 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between sm:mb-6 gap-6 sm:gap-0 lg:p-0 p-2">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-1">
            Total Platform Visitors
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Total for the last 3 months
          </p>
        </div>

        <div className="inline-flex sm:w-96 w-64 items-center border rounded-md bg-slate-50 overflow-hidden">
          {['Last 3 months', 'Last 30 days', 'Last 7 days'].map((label) => (
            <Button
              key={label}
              variant={activeFilter === label ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveFilter(label)}
              className="text-[10px] w-1/3 sm:text-[14px] px-2 sm:px-4 h-8 sm:h-10 rounded-none cursor-pointer whitespace-nowrap"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 0, bottom: 0, left: -60 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              stroke="#e5e7eb"
              horizontal
              vertical={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={true}
              dy={10}
              tick={{
                fill: '#737373',
                fontSize: 12,
                fontWeight: 500,
                dx: -50,
                dy: 10,
              }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
              }}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#5a3a9f"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
