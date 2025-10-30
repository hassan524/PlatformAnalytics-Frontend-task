import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  percentage: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, percentage }) => {
  return (
    <div className="bg-white rounded-xl cursor-pointer hover:scale-[1.01] transition-all hover:shadow-xl shadow-sm p-4 lg:p-6 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-muted-foreground ">{title}</h3>
        <span className="text-sm font-semibold text-green-500">
          {percentage}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center text-xl">
            <img src="/Vector.png" alt="" />
          </div>
          <p className="text-xl lg:text-2xl font-bold text-gray-900">
            ${value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
