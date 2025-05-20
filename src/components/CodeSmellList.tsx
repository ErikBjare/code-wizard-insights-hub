
import React from 'react';
import { AlertTriangle, FileCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CodeSmell {
  id: string;
  file: string;
  line: number;
  type: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
}

interface CodeSmellListProps {
  smells: CodeSmell[];
  limit?: number;
  className?: string;
}

const CodeSmellList: React.FC<CodeSmellListProps> = ({ 
  smells, 
  limit, 
  className 
}) => {
  const displaySmells = limit ? smells.slice(0, limit) : smells;
  
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-code-yellow text-black';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <AlertTriangle className="h-4 w-4" />
          Code Smells
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-1">
          {displaySmells.length > 0 ? (
            displaySmells.map((smell) => (
              <div
                key={smell.id}
                className="flex items-start justify-between px-6 py-2 hover:bg-secondary/50"
              >
                <div className="flex items-start gap-3">
                  <FileCode className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{smell.file}:{smell.line}</div>
                    <div className="text-sm text-muted-foreground">{smell.message}</div>
                  </div>
                </div>
                <Badge className={cn("", getSeverityClass(smell.severity))}>
                  {smell.type}
                </Badge>
              </div>
            ))
          ) : (
            <div className="px-6 py-8 text-center text-sm text-muted-foreground">
              No code smells detected
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeSmellList;
