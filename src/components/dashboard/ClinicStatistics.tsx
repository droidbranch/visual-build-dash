import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Calendar, User, Stethoscope, Building } from "lucide-react";

const servicesData = [
  { name: "Service 1", value: 200, color: "#06b6d4" },
  { name: "Service 2", value: 120, color: "#8b5cf6" },
  { name: "Service 3", value: 180, color: "#f59e0b" },
  { name: "Service 4", value: 90, color: "#ec4899" },
  { name: "Service 5", value: 220, color: "#10b981" },
];

const doctorsData = [
  { name: "March 2-9, 2025", patients: 200 }
];

export function ClinicStatistics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Clinic Stats */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Clinic Statistics</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Calendar className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Today Appointment</p>
                <p className="text-xl font-bold">470</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <span className="text-blue-600">📊</span>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Doctors</p>
                <p className="text-xl font-bold">10</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <span>+</span>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-100">
                <Stethoscope className="w-4 h-4 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Patients</p>
                <p className="text-xl font-bold">2500</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <span className="text-cyan-600">👥</span>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Building className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nurses</p>
                <p className="text-xl font-bold">674</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <span className="text-purple-600">👩‍⚕️</span>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-100">
                <Building className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Departments</p>
                <p className="text-xl font-bold">12</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <span className="text-indigo-600">🏢</span>
            </Button>
          </div>
        </div>
      </Card>

      {/* Services Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Services (05)</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={servicesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {servicesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Doctors Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Doctors (03)</h3>
        <div className="h-80 flex items-center justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={[
                { name: "Active", value: 75, color: "#8b5cf6" },
                { name: "Available", value: 15, color: "#06b6d4" },
                { name: "Busy", value: 10, color: "#f59e0b" }
              ]}
              cx={100}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
            >
              {[
                { color: "#8b5cf6" },
                { color: "#06b6d4" },
                { color: "#f59e0b" }
              ].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">March 2-9, 2025</p>
          <p className="text-sm text-success">● Patients 200</p>
        </div>
      </Card>
    </div>
  );
}