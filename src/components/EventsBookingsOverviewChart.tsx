import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface EventsBookingsOverviewChartProps {
  data: Array<{ name: string; value: number }>;
}

export default function EventsBookingsOverviewChart({
  data,
}: EventsBookingsOverviewChartProps) {
  const COLORS = ['#008A05', '#D80004', '#B8860B'];

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Event's Bookings Overview
        </h2>

        {/* Stats */}
        <div className="flex mt-7 justify-between flex-wrap gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-0 text-sm"
            >
              <span
                className="font-semibold text-xl"
                style={{ color: COLORS[index % COLORS.length] }}
              >
                {item.value}
              </span>
              <span
                className="text-muted-foreground text-sm"
                style={{ color: COLORS[index % COLORS.length] }}
              >
                {item.name}:
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[200px] flex justify-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
              }}
              itemStyle={{
                color: '#111827',
                fontSize: '13px',
                fontWeight: 500,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
