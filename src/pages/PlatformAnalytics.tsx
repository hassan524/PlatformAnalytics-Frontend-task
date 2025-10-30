// src/pages/PlatformAnalytics.tsx
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Sidebar';
import { ArrowDown, Settings } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import { statsData } from '@/data/statsData';
import TotalPlatformVisitorsChart from '@/components/TotalPlatformVisitors';
import {
  platformVisitorsData,
  monthlyRevenueData,
  eventsBookingsData,
  singersCustomersData,
  platformRevenueData,
  bookingTrendsData,
} from '@/data/chartsData';
import MonthlyRevenueChart from '@/components/MonthlyRevenueChart';
import EventsBookingsOverviewChart from '@/components/EventsBookingsOverviewChart';
import SingersCustomersChart from '@/components/SingersCustomersChart';
import PlatformSingersRevenueChart from '@/components/PlatformSingersRevenueChart';
import BookingTrendsChart from '@/components/BookingTrendsChart';

const PlatformAnalytics = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex lg:px-5 p-2 min-h-screen w-screen overflow-hidden  bg-[#F7F7F7]">
        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0">

          {/* ===== Header ===== */}
          <header className="flex md:h-[13vh] h-[8vh] items-center justify-between border-b px-4 lg:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="lg:hidden" />

              <div className="flex items-center gap-3">
                <img
                  src="/pfp.png"
                  alt="Nazee Zulfiqar"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-secondary-foreground">
                    Nazee Zulfiqar
                  </span>
                  <span className="text-xs text-muted-foreground">Admin</span>
                </div>
              </div>
            </div>

            <div className="h-8 w-8 rounded-full flex justify-center items-center border bg-white">
              <Settings className="text-gray-200" />
            </div>
          </header>

          {/* ===== Main Content ===== */}
          <main className="flex-1 p-2 lg:p-6">

            <div className="space-y-2">

              <div className="flex md:flex-row md:gap-0 gap-3 flex-col md:py-0 py-5 md:items-center items-start justify-between">
                <div>
                  <h2 className="md:text-2xl text-xl font-bold text-gray-900">
                    Platform & Analytics
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Real-time Management user and creation actions
                  </p>
                </div>
                <button className="bg-linear-to-b from-[#FFD700] to-[#B8860B] hover:opacity-90 text-gray-900 font-semibold px-5 py-2.5 rounded-lg text-sm  flex items-center gap-2">
                  <ArrowDown /> Export Invoice
                </button>
              </div>

              <div className="grid pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsData.map((stat, index) => (
                  <StatsCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                  />
                ))}
              </div>

              {/* 1. Large Chart - Total Platform Visitors */}
              <div className="mb-8 pt-5">
                <TotalPlatformVisitorsChart data={platformVisitorsData} />
              </div>

              {/* 2. Two Charts Side by Side */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:flex-[1.3]">
                  <MonthlyRevenueChart data={monthlyRevenueData} />
                </div>
                <div className="md:flex-1">
                  <EventsBookingsOverviewChart data={eventsBookingsData} />
                </div>
              </div>

              {/* 3. Two Charts Side by Side */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:flex-[1.4]">
                  <SingersCustomersChart data={singersCustomersData} />
                </div>
                <div className="md:flex-1">
                  <PlatformSingersRevenueChart data={platformRevenueData} />
                </div>
              </div>

               {/* 4. Chart */}
              <div className="w-full md:w-[80%] self-start">
                <BookingTrendsChart data={bookingTrendsData} />
              </div>

            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PlatformAnalytics;
