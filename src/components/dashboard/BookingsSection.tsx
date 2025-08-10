import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "./MetricCard";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

export function BookingsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Bookings</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last 30 Days</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Reports
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Patients"
          value="2500"
          change="↑ 4.63%"
          changeType="positive"
          icon={<Users className="w-5 h-5 text-chart-purple" />}
          className="border-l-4 border-chart-purple"
        />
        
        <MetricCard
          title="Walk-in Bookings"
          value="50"
          change="↓ 2.34%"
          changeType="negative"
          icon={<Calendar className="w-5 h-5 text-chart-orange" />}
          className="border-l-4 border-chart-orange"
        />
        
        <MetricCard
          title="Online Bookings"
          value="126"
          change="↑ 2.34%"
          changeType="positive"
          icon={<Calendar className="w-5 h-5 text-chart-blue" />}
          className="border-l-4 border-chart-blue"
        />
        
        <MetricCard
          title="Invoice Generated"
          value="₹52,485"
          change="↑ 1.34%"
          changeType="positive"
          icon={<DollarSign className="w-5 h-5 text-chart-pink" />}
          className="border-l-4 border-chart-pink"
        />
      </div>
    </div>
  );
}