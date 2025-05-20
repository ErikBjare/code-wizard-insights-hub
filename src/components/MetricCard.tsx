
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  trend,
  trendValue,
  icon,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            <div
              className={cn("text-xs font-medium mr-1", {
                "text-code-green": trend === "up",
                "text-code-red": trend === "down",
                "text-muted-foreground": trend === "neutral",
              })}
            >
              {trendValue}
            </div>
            <div
              className={cn("text-xs", {
                "text-code-green": trend === "up",
                "text-code-red": trend === "down",
                "text-muted-foreground": trend === "neutral",
              })}
            >
              {trend === "up" && "↑"}
              {trend === "down" && "↓"}
              {trend === "neutral" && "→"}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
