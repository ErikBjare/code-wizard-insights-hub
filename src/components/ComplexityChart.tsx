
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface ComplexityData {
  name: string;
  complexity: number;
  lines: number;
}

interface ComplexityChartProps {
  data: ComplexityData[];
  title?: string;
  className?: string;
}

const ComplexityChart: React.FC<ComplexityChartProps> = ({ 
  data, 
  title = "File Complexity", 
  className 
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border rounded-md shadow-lg">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-sm text-muted-foreground">{`Complexity: ${payload[0].value}`}</p>
          <p className="text-sm text-muted-foreground">{`Lines: ${payload[1]?.payload?.lines || 'N/A'}`}</p>
        </div>
      );
    }
    return null;
  };

  const getComplexityColor = (complexity: number) => {
    if (complexity > 20) return "#f44336";  // red
    if (complexity > 10) return "#ffeb3b";  // yellow
    return "#4caf50";  // green
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-0">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }} 
                stroke="#666"
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                stroke="#666"
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="complexity"
                radius={[4, 4, 0, 0]}
                fill="#4caf50"
                fillOpacity={0.8}
              >
                {data.map((entry, index) => (
                  <rect 
                    key={`rect-${index}`} 
                    fill={getComplexityColor(entry.complexity)} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplexityChart;
