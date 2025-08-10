import { DashboardLayout } from "@/components/DashboardLayout";
import { BookingsSection } from "@/components/dashboard/BookingsSection";
import { ClinicStatistics } from "@/components/dashboard/ClinicStatistics";
import { FinanceSection } from "@/components/dashboard/FinanceSection";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Search projects...</span>
            <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">⊞</span>
            </div>
          </div>
        </div>

        <BookingsSection />
        
        <ClinicStatistics />
        
        <FinanceSection />
      </div>
    </DashboardLayout>
  );
};

export default Index;
