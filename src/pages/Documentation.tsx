
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, Book, BookOpen, Code, Calendar } from 'lucide-react';
import Layout from '@/components/Layout';
import { documentationData } from '@/data/mockData';

const Documentation = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Documentation</h1>
          <p className="text-muted-foreground">Project standards, guides and architecture</p>
        </div>

        {/* Documentation tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Development Guidelines</CardTitle>
            <CardDescription>
              Key documents and standards for the project
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Tabs defaultValue="standards">
              <TabsList className="mb-4">
                <TabsTrigger value="standards">Standards</TabsTrigger>
                <TabsTrigger value="practices">Best Practices</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
              </TabsList>
              
              {documentationData.map((doc) => (
                <TabsContent key={doc.id} value={doc.category} className="space-y-4">
                  <div className="rounded-md bg-secondary p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-accent/40 p-2 rounded">
                        {doc.category === 'standards' && <Book className="h-5 w-5" />}
                        {doc.category === 'practices' && <BookOpen className="h-5 w-5" />}
                        {doc.category === 'architecture' && <Code className="h-5 w-5" />}
                        {doc.category === 'testing' && <FileText className="h-5 w-5" />}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{doc.content}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> 
                          Last updated: {doc.lastUpdated}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {doc.category === 'standards' && 'These standards ensure consistency and maintainability across the codebase.'}
                    {doc.category === 'practices' && 'Following these practices helps maintain code quality and team efficiency.'}
                    {doc.category === 'architecture' && 'Understanding the architecture helps with making consistent design decisions.'}
                    {doc.category === 'testing' && 'A comprehensive testing strategy ensures reliability and reduces regressions.'}
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Technical docs FAQ */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">FAQ & Technical Reference</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base">
                  How are code metrics calculated?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    Our code metrics are calculated using a combination of static analysis tools and custom algorithms:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Complexity:</span> Calculated using cyclomatic complexity, measuring the number of linearly independent paths through the code.
                    </li>
                    <li>
                      <span className="font-medium">Maintainability:</span> Based on factors like code length, complexity, and coupling between modules.
                    </li>
                    <li>
                      <span className="font-medium">Reliability:</span> Calculated from defect density, test coverage, and potential bugs identified through static analysis.
                    </li>
                    <li>
                      <span className="font-medium">Security:</span> Based on identified vulnerabilities and adherence to security best practices.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base">
                  What tools are used for code analysis?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    Our code analysis pipeline uses a combination of the following tools:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>ESLint for JavaScript/TypeScript linting</li>
                    <li>SonarQube for comprehensive code quality analysis</li>
                    <li>Jest coverage reports for test coverage metrics</li>
                    <li>CodeClimate for maintainability metrics</li>
                    <li>Custom scripts for team performance and contribution tracking</li>
                  </ul>
                  <p className="mt-2">
                    The analysis runs on every pull request and nightly on the main branch.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base">
                  How is the developer score calculated?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <p>
                    Developer scores are calculated based on multiple factors:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Code quality metrics of submitted code (40%)</li>
                    <li>Test coverage of new code (20%)</li>
                    <li>Code review participation and quality (15%)</li>
                    <li>Documentation contributions (10%)</li>
                    <li>Bug fix rate and difficulty (10%)</li>
                    <li>Mentoring and knowledge sharing (5%)</li>
                  </ul>
                  <p className="mt-2">
                    The score is intended to provide a balanced view of both code quality and team contribution, not just commit volume.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base">
                  What are the thresholds for code smells?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <p>
                    The thresholds for different types of code smells are as follows:
                  </p>
                  <div className="mt-2 space-y-3">
                    <div>
                      <h4 className="font-medium">Complexity:</h4>
                      <ul className="list-disc pl-5">
                        <li>High: &gt; 15 cyclomatic complexity</li>
                        <li>Medium: 10-15 cyclomatic complexity</li>
                        <li>Low: 6-10 cyclomatic complexity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">File Size:</h4>
                      <ul className="list-disc pl-5">
                        <li>High: &gt; 300 lines</li>
                        <li>Medium: 200-300 lines</li>
                        <li>Low: 100-200 lines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Duplication:</h4>
                      <ul className="list-disc pl-5">
                        <li>High: &gt; 20% duplication</li>
                        <li>Medium: 10-20% duplication</li>
                        <li>Low: 5-10% duplication</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base">
                  How to interpret the quality scores?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    Quality scores range from 0-100 and are categorized as follows:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="text-code-green font-medium">Good (80-100):</span> Code meets or exceeds all quality standards</li>
                    <li><span className="text-code-yellow font-medium">Fair (60-79):</span> Code meets most quality standards but has room for improvement</li>
                    <li><span className="text-code-red font-medium">Poor (0-59):</span> Code requires significant refactoring to meet quality standards</li>
                  </ul>
                  <p className="mt-2">
                    The overall score is a weighted average of maintainability, reliability, and security metrics.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Architecture diagram */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Architecture Diagram</CardTitle>
            <CardDescription>
              High-level overview of the system architecture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/50 p-8 rounded-md flex items-center justify-center">
              <div className="max-w-2xl w-full">
                <div className="space-y-6">
                  {/* UI Layer */}
                  <div className="p-4 bg-accent/20 rounded-md">
                    <h3 className="font-medium mb-2">UI Layer</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-accent/40 rounded text-xs text-center">Components</div>
                      <div className="p-2 bg-accent/40 rounded text-xs text-center">Pages</div>
                      <div className="p-2 bg-accent/40 rounded text-xs text-center">Hooks</div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0 h-6 border-l-2 border-dashed border-border"></div>
                  </div>
                  
                  {/* State Management */}
                  <div className="p-4 bg-primary/20 rounded-md">
                    <h3 className="font-medium mb-2">State Management</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-primary/40 rounded text-xs text-center">Store</div>
                      <div className="p-2 bg-primary/40 rounded text-xs text-center">Context</div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0 h-6 border-l-2 border-dashed border-border"></div>
                  </div>
                  
                  {/* Services Layer */}
                  <div className="p-4 bg-code-blue/20 rounded-md">
                    <h3 className="font-medium mb-2">Services Layer</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-code-blue/40 rounded text-xs text-center">API Client</div>
                      <div className="p-2 bg-code-blue/40 rounded text-xs text-center">Data Models</div>
                      <div className="p-2 bg-code-blue/40 rounded text-xs text-center">Utils</div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0 h-6 border-l-2 border-dashed border-border"></div>
                  </div>
                  
                  {/* Backend */}
                  <div className="p-4 bg-destructive/20 rounded-md">
                    <h3 className="font-medium mb-2">Backend Services</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-destructive/40 rounded text-xs text-center">RESTful API</div>
                      <div className="p-2 bg-destructive/40 rounded text-xs text-center">Database</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Documentation;
