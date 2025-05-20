
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Layout from '@/components/Layout';
import QualityScore from '@/components/QualityScore';
import ComplexityChart from '@/components/ComplexityChart';
import { codeQualityMetrics, fileComplexity } from '@/data/mockData';

const CodeQuality = () => {
  const coverageData = [
    { name: 'Covered', value: codeQualityMetrics.testCoverage },
    { name: 'Uncovered', value: 100 - codeQualityMetrics.testCoverage }
  ];

  const COLORS = ['#4caf50', '#f1f1f1'];

  const filesData = [
    { category: 'Clean', count: 45, percentage: 62.5 },
    { category: 'Minor Issues', count: 18, percentage: 25 },
    { category: 'Major Issues', count: 9, percentage: 12.5 }
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Code Quality</h1>
          <p className="text-muted-foreground">Detailed analysis of code quality metrics</p>
        </div>

        {/* Main quality scores */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-base text-center">Overall Quality</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <QualityScore score={codeQualityMetrics.overall} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-base text-center">Maintainability</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <QualityScore score={codeQualityMetrics.maintainability} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-base text-center">Reliability</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <QualityScore score={codeQualityMetrics.reliability} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-base text-center">Security</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <QualityScore score={codeQualityMetrics.security} />
            </CardContent>
          </Card>
        </div>

        {/* File status overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base">Files Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {filesData.map((item) => (
                  <div key={item.category} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.category}</span>
                      <span>{item.count} files ({item.percentage}%)</span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className={`progress-bar ${
                          item.category === 'Clean' ? 'bg-code-green' : 
                          item.category === 'Minor Issues' ? 'bg-code-yellow' : 'bg-code-red'
                        }`}
                        style={{ width: `${item.percentage}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base">Test Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={coverageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {coverageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium">Overall Test Coverage: {codeQualityMetrics.testCoverage}%</p>
                <p className="text-xs text-muted-foreground">Target coverage: 80%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* File complexity chart */}
        <ComplexityChart data={fileComplexity} title="File Complexity Analysis" />
        
        {/* Quality indicators */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quality Indicators</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Tabs defaultValue="patterns">
              <TabsList>
                <TabsTrigger value="patterns">Code Patterns</TabsTrigger>
                <TabsTrigger value="duplication">Duplication</TabsTrigger>
                <TabsTrigger value="complexity">Complexity</TabsTrigger>
              </TabsList>
              <TabsContent value="patterns" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-md bg-secondary p-4">
                    <div className="text-lg font-medium">28</div>
                    <div className="text-sm text-muted-foreground">Code Smells</div>
                  </div>
                  <div className="rounded-md bg-secondary p-4">
                    <div className="text-lg font-medium">5</div>
                    <div className="text-sm text-muted-foreground">Bugs</div>
                  </div>
                  <div className="rounded-md bg-secondary p-4">
                    <div className="text-lg font-medium">2</div>
                    <div className="text-sm text-muted-foreground">Vulnerabilities</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Code patterns are analyzed based on static code analysis rules and best practices for React and TypeScript.</p>
              </TabsContent>
              <TabsContent value="duplication" className="mt-4">
                <div className="space-y-4">
                  <div className="rounded-md bg-secondary p-4 flex justify-between">
                    <div>
                      <div className="text-lg font-medium">{codeQualityMetrics.duplication}%</div>
                      <div className="text-sm text-muted-foreground">Code duplication</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium">432</div>
                      <div className="text-sm text-muted-foreground">Duplicate lines</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Duplication occurs when the same code pattern appears in multiple locations.
                    The threshold for duplication detection is 10 lines of code.
                  </p>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Most duplicated files:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>src/services/api.ts (3 duplications)</li>
                      <li>src/components/Form.tsx (2 duplications)</li>
                      <li>src/utils/formatters.ts (2 duplications)</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="complexity" className="mt-4">
                <div className="space-y-4">
                  <div className="rounded-md bg-secondary p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-lg font-medium">7.5</div>
                      <div className="text-sm text-muted-foreground">Average complexity per file</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium">3.2</div>
                      <div className="text-sm text-muted-foreground">Average complexity per function</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cognitive complexity measures how difficult code is to understand. Lower values are better.
                    Files with complexity above 15 are flagged for refactoring.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CodeQuality;
