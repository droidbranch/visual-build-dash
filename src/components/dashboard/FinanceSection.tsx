import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { TrendingUp, Wallet, DollarSign, CreditCard, FileText } from "lucide-react";

const revenueData = [
  { month: "Jan", income: 12570, expenses: 9800 },
  { month: "Feb", income: 15200, expenses: 11200 },
  { month: "Mar", income: 18574, expenses: 13400 },
  { month: "Apr", income: 16800, expenses: 12100 },
  { month: "May", income: 19200, expenses: 14300 },
  { month: "Jun", income: 18574, expenses: 11574 },
];

const invoiceData = [
  { name: "Settled", value: 1500, color: "#06b6d4" },
  { name: "Unsettled", value: 23, color: "#f59e0b" },
];

const weeklyRevenueData = [
  { period: "Monthly", value: "98K" },
  { period: "Weekly", value: "9.69K" },
  { period: "Daily", value: "3.94K" },
];

export function FinanceSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Finance</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last 30 Days</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Reports
          </Button>
        </div>
      </div>

      {/* Finance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-primary text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-foreground/80 text-sm">Your Account Balance</p>
              <p className="text-2xl font-bold">₹21,574</p>
            </div>
            <Wallet className="w-8 h-8 text-primary-foreground/80" />
          </div>
          <Button variant="secondary" size="sm" className="mt-4">
            Check Now
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Cash Inhand</p>
              <p className="text-2xl font-bold">₹1,574</p>
            </div>
            <CreditCard className="w-8 h-8 text-chart-blue" />
          </div>
          <Button variant="outline" size="sm" className="mt-4">
            Check Now
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Revenue</p>
              <p className="text-2xl font-bold">₹18,574</p>
              <p className="text-xs text-success">↑ 4.63% vs. last week</p>
            </div>
            <TrendingUp className="w-8 h-8 text-chart-green" />
          </div>
          <Button variant="outline" size="sm" className="mt-4">
            Check Now
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Expenses</p>
              <p className="text-2xl font-bold">₹11,574</p>
              <p className="text-xs text-success">↑ 4.63% vs. last week</p>
            </div>
            <FileText className="w-8 h-8 text-chart-orange" />
          </div>
          <Button variant="outline" size="sm" className="mt-4">
            Check Now
          </Button>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Invoices Pie Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Invoices</h3>
          <p className="text-sm text-muted-foreground mb-4">Last 30 days income of the hospital</p>
          <div className="h-64 flex items-center justify-center">
            <PieChart width={200} height={200}>
              <Pie
                data={invoiceData}
                cx={100}
                cy={100}
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {invoiceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-chart-cyan rounded-full"></div>
                <span className="text-sm">Settled Invoices</span>
              </div>
              <span className="font-semibold">1500</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-chart-orange rounded-full"></div>
                <span className="text-sm">Unsettled Invoices</span>
              </div>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Payment Due Total</span>
              <span className="font-bold text-lg">₹9,574</span>
            </div>
          </div>
        </Card>

        {/* Total Revenue */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
          <p className="text-sm text-muted-foreground mb-4">In 30 days income of the hospital</p>
          <div className="space-y-4">
            {weeklyRevenueData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{item.period}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="h-32 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyRevenueData.slice(0, 3)}>
                <Bar dataKey="value" fill="#10b981" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Income vs Expenses */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
          <p className="text-sm text-muted-foreground mb-4">Last 30 days income vs Expenses Statistics</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}