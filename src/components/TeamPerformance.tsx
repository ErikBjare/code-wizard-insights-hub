
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
  score: number;
  commits: number;
  additions: number;
  deletions: number;
}

interface TeamPerformanceProps {
  members: TeamMember[];
  className?: string;
}

const TeamPerformance: React.FC<TeamPerformanceProps> = ({ members, className }) => {
  // Sort members by score in descending order
  const sortedMembers = [...members].sort((a, b) => b.score - a.score);

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-base">Team Performance</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-1">
          {sortedMembers.map((member, index) => {
            // Calculate width percentage for score indicator
            const scoreWidth = `${member.score}%`;
            
            // Determine color based on top performers
            let scoreColorClass = "";
            if (index === 0) scoreColorClass = "bg-primary";
            else if (index === 1) scoreColorClass = "bg-code-blue";
            else scoreColorClass = "bg-muted";

            return (
              <div
                key={member.id}
                className="flex items-center justify-between px-6 py-2 hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {member.commits} commits · +{member.additions} −{member.deletions}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium">{member.score}</div>
                  <div className="h-2 w-24 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", scoreColorClass)}
                      style={{ width: scoreWidth }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamPerformance;
