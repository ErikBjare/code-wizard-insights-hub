
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import Layout from '@/components/Layout';
import { teamMembers } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Team = () => {
  // Sort team members by score in descending order
  const sortedMembers = [...teamMembers].sort((a, b) => b.score - a.score);
  
  // Generate commit activity data
  const commitActivityData = sortedMembers.map(member => ({
    name: member.name.split(' ')[0],
    commits: member.commits,
    additions: Math.floor(member.additions / 100),
    deletions: Math.floor(member.deletions / 100),
  }));

  // Function to determine badge based on member score
  const getMemberBadge = (score: number) => {
    if (score >= 90) return { label: 'Expert', class: 'bg-code-green' };
    if (score >= 80) return { label: 'Advanced', class: 'bg-code-blue' };
    if (score >= 70) return { label: 'Proficient', class: 'bg-purple-600' };
    if (score >= 60) return { label: 'Skilled', class: 'bg-code-yellow text-black' };
    return { label: 'Learning', class: 'bg-muted' };
  };

  // Bar chart colors
  const getBarColor = (index: number) => {
    const colors = ['#9b87f5', '#2196f3', '#4caf50', '#ffeb3b', '#f44336'];
    return colors[index % colors.length];
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Team Performance</h1>
          <p className="text-muted-foreground">Developer metrics and contributions</p>
        </div>

        {/* Top developer highlight */}
        <Card className="bg-gradient-to-br from-accent/30 to-accent/10">
          <CardHeader>
            <CardTitle className="text-base">Top Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={sortedMembers[0]?.avatar} alt={sortedMembers[0]?.name} />
                <AvatarFallback className="text-xl">
                  {sortedMembers[0]?.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl font-bold">{sortedMembers[0]?.name}</h2>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-primary">Score: {sortedMembers[0]?.score}</Badge>
                  <Badge variant="outline">{sortedMembers[0]?.commits} commits</Badge>
                  <Badge variant="outline">+{sortedMembers[0]?.additions} lines</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leading contributor with exceptional code quality and consistent delivery
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team members list */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Team Overview</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="space-y-1">
              {sortedMembers.map((member, index) => {
                // Calculate width percentage for score indicator
                const scoreWidth = `${member.score}%`;
                const badge = getMemberBadge(member.score);
                
                return (
                  <div
                    key={member.id}
                    className="flex flex-col md:flex-row md:items-center justify-between px-6 py-3 hover:bg-secondary/50"
                  >
                    <div className="flex items-center gap-3 mb-3 md:mb-0">
                      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-sm font-medium">
                        {index + 1}
                      </div>
                      <Avatar className="h-10 w-10">
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
                    <div className="flex items-center gap-4 ml-9 md:ml-0">
                      <Badge className={badge.class}>{badge.label}</Badge>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">{member.score}</div>
                        <div className="h-2 w-24 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={cn("h-full rounded-full", index === 0 ? "bg-primary" : "bg-accent")}
                            style={{ width: scoreWidth }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Commit activity chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Commit Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={commitActivityData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="commits" name="Commits" radius={[4, 4, 0, 0]}>
                    {commitActivityData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={getBarColor(index)} />
                    ))}
                  </Bar>
                  <Bar dataKey="additions" name="Additions (x100)" radius={[4, 4, 0, 0]} fill="#4caf50" />
                  <Bar dataKey="deletions" name="Deletions (x100)" radius={[4, 4, 0, 0]} fill="#f44336" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Team insights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Team Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Badge className="bg-code-green h-fit">+</Badge>
                    <span className="text-sm">Strong test coverage culture (76.4% overall)</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge className="bg-code-green h-fit">+</Badge>
                    <span className="text-sm">Consistent code review participation</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge className="bg-code-green h-fit">+</Badge>
                    <span className="text-sm">Good documentation habits</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge className="bg-code-green h-fit">+</Badge>
                    <span className="text-sm">Regular refactoring of legacy code</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3">Improvement Areas</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Badge className="bg-code-red h-fit">!</Badge>
                    <span className="text-sm">High complexity in key components</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge className="bg-code-red h-fit">!</Badge>
                    <span className="text-sm">Code duplication across services</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge className="bg-code-red h-fit">!</Badge>
                    <span className="text-sm">Security best practices in auth flows</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge className="bg-code-yellow h-fit text-black">!</Badge>
                    <span className="text-sm">Component reusability can be improved</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Team;
