import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon,
  className 
}: MetricCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="p-2 rounded-lg bg-primary/10">
              {icon}
            </div>
          )}
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <p className={cn("text-xs", changeColor[changeType])}>
                {change} vs. last week
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}