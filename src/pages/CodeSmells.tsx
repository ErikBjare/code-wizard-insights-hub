
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, FileCode } from 'lucide-react';
import Layout from '@/components/Layout';
import { codeSmells } from '@/data/mockData';
import { cn } from '@/lib/utils';

const CodeSmells = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const getTypeOptions = () => {
    const types = [...new Set(codeSmells.map(smell => smell.type))];
    return ['all', ...types];
  };

  const filteredSmells = codeSmells.filter(smell => {
    const matchesSearch = searchQuery === '' || 
      smell.file.toLowerCase().includes(searchQuery.toLowerCase()) ||
      smell.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSeverity = filterSeverity === 'all' || smell.severity === filterSeverity;
    const matchesType = filterType === 'all' || smell.type === filterType;
    
    return matchesSearch && matchesSeverity && matchesType;
  });

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

  const countBySeverity = (severity: string) => {
    return codeSmells.filter(smell => smell.severity === severity).length;
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Code Smells</h1>
          <p className="text-muted-foreground">Detected issues and potential improvements</p>
        </div>

        {/* Severity summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">High Severity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{countBySeverity('high')}</div>
              <p className="text-sm text-muted-foreground">Issues requiring immediate attention</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-code-yellow/20 to-code-yellow/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Medium Severity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{countBySeverity('medium')}</div>
              <p className="text-sm text-muted-foreground">Issues to address soon</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/80 to-secondary/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Low Severity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{countBySeverity('low')}</div>
              <p className="text-sm text-muted-foreground">Minor issues to improve code quality</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search files or issues..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterSeverity} onValueChange={setFilterSeverity}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All severities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {getTypeOptions().map(type => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Code smells list */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {filteredSmells.length} {filteredSmells.length === 1 ? 'Issue' : 'Issues'} Found
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="space-y-1">
              {filteredSmells.length > 0 ? (
                filteredSmells.map((smell) => (
                  <div
                    key={smell.id}
                    className="flex flex-col md:flex-row md:items-center justify-between px-6 py-3 hover:bg-secondary/50 border-b border-border"
                  >
                    <div className="flex items-start gap-3 mb-2 md:mb-0">
                      <FileCode className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="font-medium mb-1">{smell.file}:{smell.line}</div>
                        <div className="text-sm text-muted-foreground">{smell.message}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-7 md:ml-0">
                      <Badge className={cn("", getSeverityClass(smell.severity))}>
                        {smell.severity}
                      </Badge>
                      <Badge variant="outline">{smell.type}</Badge>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-sm text-muted-foreground">
                  No issues found matching your filters
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* AI assisted fixes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">AI Assisted Fixes</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="suggestions">
              <TabsList>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                <TabsTrigger value="autofix">Auto-fix</TabsTrigger>
              </TabsList>
              <TabsContent value="suggestions" className="mt-4 space-y-4">
                <div className="rounded-md bg-secondary p-4">
                  <p className="font-medium mb-2">Extract reusable component for form handling</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    The form handling logic in UserProfile.tsx is complex and duplicated. 
                    Extract it to a reusable custom hook.
                  </p>
                  <div className="bg-black/50 rounded p-3 text-xs font-mono overflow-x-auto">
                    <pre>
{`// Before
function UserProfile() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  // 15+ lines of complex validation logic
}

// After
function useFormWithValidation(initialData) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  // Validation logic in a reusable hook
  return { formData, setFormData, errors, validate };
}

function UserProfile() {
  const { formData, setFormData, errors, validate } = useFormWithValidation({});
}`}</pre>
                  </div>
                </div>
                <div className="rounded-md bg-secondary p-4">
                  <p className="font-medium mb-2">Fix security vulnerability in useAuth.ts</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use secure cookie storage instead of localStorage for auth tokens.
                  </p>
                  <div className="bg-black/50 rounded p-3 text-xs font-mono overflow-x-auto">
                    <pre>
{`// Before
const storeToken = (token) => {
  localStorage.setItem('auth-token', token);
};

// After
import { cookieStorage } from '../utils/cookies';

const storeToken = (token) => {
  cookieStorage.setSecureCookie('auth-token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });
};`}</pre>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="autofix" className="mt-4">
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">
                    The auto-fix feature can automatically resolve certain types of code smells. 
                    Select an issue type to apply automatic fixes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-secondary p-3 rounded-md">
                      <div>
                        <span className="font-medium">Missing key props in lists</span>
                        <p className="text-xs text-muted-foreground">Found in 3 files</p>
                      </div>
                      <Badge className="bg-code-blue cursor-pointer">Fix All</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-secondary p-3 rounded-md">
                      <div>
                        <span className="font-medium">Unused imports</span>
                        <p className="text-xs text-muted-foreground">Found in 5 files</p>
                      </div>
                      <Badge className="bg-code-blue cursor-pointer">Fix All</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-secondary p-3 rounded-md">
                      <div>
                        <span className="font-medium">Missing accessibility attributes</span>
                        <p className="text-xs text-muted-foreground">Found in 2 files</p>
                      </div>
                      <Badge className="bg-code-blue cursor-pointer">Fix All</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CodeSmells;
