
import React from 'react';
import { BarChart2, FileCode, AlertTriangle, Code, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import MetricCard from '@/components/MetricCard';
import QualityScore from '@/components/QualityScore';
import ComplexityChart from '@/components/ComplexityChart';
import CodeSmellList from '@/components/CodeSmellList';
import TeamPerformance from '@/components/TeamPerformance';
import { 
  codeQualityMetrics, 
  codeSmells, 
  fileComplexity, 
  teamMembers, 
  trendingMetrics 
} from '@/data/mockData';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Code Analytics Dashboard</h1>
          <p className="text-muted-foreground">Project overview and key metrics</p>
        </div>

        {/* Main metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Overall Quality"
            value={`${codeQualityMetrics.overall}%`}
            trend="up"
            trendValue={trendingMetrics.qualityTrend}
            icon={<FileCode className="h-4 w-4" />}
          />
          <MetricCard
            title="Code Smells"
            value={codeQualityMetrics.codeSmells}
            trend="down"
            trendValue={trendingMetrics.smellsTrend}
            icon={<AlertTriangle className="h-4 w-4" />}
          />
          <MetricCard
            title="Test Coverage"
            value={`${codeQualityMetrics.testCoverage}%`}
            trend="up"
            trendValue={trendingMetrics.coverageTrend}
            icon={<Code className="h-4 w-4" />}
          />
          <MetricCard
            title="Technical Debt"
            value={codeQualityMetrics.techDebt}
            trend="down"
            trendValue={trendingMetrics.techDebtTrend}
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        {/* Score overview card */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-xl">Quality Metrics</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center">
                <QualityScore score={codeQualityMetrics.overall} size="lg" />
                <h3 className="mt-4 text-lg font-medium">Overall Score</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on maintainability, reliability, and security
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <QualityScore score={codeQualityMetrics.maintainability} size="sm" />
                  <p className="text-sm mt-1">Maintainability</p>
                </div>
                <div className="flex flex-col items-center">
                  <QualityScore score={codeQualityMetrics.reliability} size="sm" />
                  <p className="text-sm mt-1">Reliability</p>
                </div>
                <div className="flex flex-col items-center">
                  <QualityScore score={codeQualityMetrics.security} size="sm" />
                  <p className="text-sm mt-1">Security</p>
                </div>
                <div className="flex flex-col items-center col-span-1 md:col-span-3">
                  <div className="w-full px-4">
                    <div className="mb-1 flex justify-between text-xs">
                      <span>Duplication</span>
                      <span>{codeQualityMetrics.duplication}%</span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar bg-code-blue" 
                        style={{ width: `${codeQualityMetrics.duplication}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lower section: Code complexity & team performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComplexityChart data={fileComplexity} />
          <CodeSmellList smells={codeSmells} limit={4} />
          <TeamPerformance members={teamMembers.slice(0, 4)} />
          <Card>
            <CardHeader>
              <CardTitle className="text-base">AI Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="critical">
                <TabsList className="mb-4">
                  <TabsTrigger value="critical">Critical</TabsTrigger>
                  <TabsTrigger value="important">Important</TabsTrigger>
                  <TabsTrigger value="minor">Minor</TabsTrigger>
                </TabsList>
                <TabsContent value="critical" className="space-y-4">
                  <div className="rounded-md bg-destructive/20 p-3">
                    <p className="text-sm font-medium">Refactor UserProfile.tsx</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      The complexity score of 24 indicates that this component needs immediate attention. 
                      Consider breaking it into smaller components.
                    </p>
                  </div>
                  <div className="rounded-md bg-destructive/20 p-3">
                    <p className="text-sm font-medium">Fix security issue in useAuth.ts</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Storing credentials in localStorage presents a security risk. Consider using 
                      httpOnly cookies or a secure storage alternative.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="important" className="space-y-4">
                  <div className="rounded-md bg-code-yellow/20 p-3">
                    <p className="text-sm font-medium">Remove code duplication in api.ts</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Duplicate code found across 3 files. Extract common functionality into a shared utility.
                    </p>
                  </div>
                  <div className="rounded-md bg-code-yellow/20 p-3">
                    <p className="text-sm font-medium">Simplify reducer in userSlice.ts</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Consider breaking down the reducer into smaller functions or using builder pattern.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="minor" className="space-y-4">
                  <div className="rounded-md bg-muted p-3">
                    <p className="text-sm font-medium">Add keys to Table.tsx list items</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Use unique keys for list items to improve React rendering performance.
                    </p>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <p className="text-sm font-medium">Update test coverage for Menu.tsx</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Current coverage is below target. Add tests for the conditional rendering cases.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
