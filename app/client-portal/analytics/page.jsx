// app/pages/AnalyticsPage.jsx
import TrafficSourcesCard from "@/components/analytics/TrafficSourcesCard";
import ConversionsCard from "@/components/analytics/ConversionsCard";
import TopPagesCard from "@/components/analytics/TopPagesCard";
import UserEngagementCard from "@/components/analytics/UserEngagementCard";
import LiveVisitorsCard from "@/components/analytics/LiveVisitorsCard";
import { businessInfo as business } from "@/content/globals";

export default function AnalyticsPage() {
  const { name, ...attr } = business;
  return (
    <div className="min-h-screen w-full bg-gray-50 py-8 px-4 mobile:px-6 laptop:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            {name} Website Insights Dashboard
          </h1>
          <p className="text-gray-600">
            See how your visitors are finding and interacting with your site.
          </p>
        </div>

        {/* Traffic Sources + Conversions */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
          <TrafficSourcesCard />
          <ConversionsCard />
        </div>

        {/* Top Pages */}
        <div className="grid grid-cols-1">
          <TopPagesCard />
        </div>

        {/* User Engagement */}
        <div className="grid grid-cols-1">
          <UserEngagementCard />
        </div>

        {/* Live Visitors (optional) */}
        <div className="grid grid-cols-1">
          <LiveVisitorsCard />
        </div>
      </div>
    </div>
  );
}
