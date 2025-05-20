
// Mock data for code analytics dashboard

export const codeQualityMetrics = {
  overall: 78,
  maintainability: 82,
  reliability: 73,
  security: 80,
  duplication: 8.5,
  testCoverage: 76.4,
  codeSmells: 28,
  bugs: 5,
  vulnerabilities: 2,
  techDebt: "4d 2h"
};

export const codeSmells = [
  {
    id: "cs-001",
    file: "src/components/UserProfile.tsx",
    line: 45,
    type: "Complexity",
    severity: "high",
    message: "Function 'handleUserData' has a cyclomatic complexity of 15"
  },
  {
    id: "cs-002",
    file: "src/services/api.ts",
    line: 87,
    type: "Duplication",
    severity: "medium",
    message: "This block of code is duplicated in 3 files"
  },
  {
    id: "cs-003",
    file: "src/utils/formatters.ts",
    line: 124,
    type: "Maintainability",
    severity: "low",
    message: "Function 'formatCurrency' is too large (52 lines)"
  },
  {
    id: "cs-004",
    file: "src/hooks/useAuth.ts",
    line: 36,
    type: "Security",
    severity: "high",
    message: "Credentials are stored in localStorage"
  },
  {
    id: "cs-005",
    file: "src/pages/Dashboard.tsx",
    line: 217,
    type: "Reliability",
    severity: "medium",
    message: "Component has too many state variables (15)"
  },
  {
    id: "cs-006",
    file: "src/components/Table.tsx",
    line: 92,
    type: "Performance",
    severity: "low",
    message: "Inefficient list rendering without key prop"
  },
  {
    id: "cs-007",
    file: "src/store/userSlice.ts",
    line: 54,
    type: "Complexity",
    severity: "medium",
    message: "Reducer function has too many cases (12)"
  }
] as Array<{
  id: string;
  file: string;
  line: number;
  type: string;
  severity: "low" | "medium" | "high";
  message: string;
}>;

export const fileComplexity = [
  { name: "UserProfile.tsx", complexity: 24, lines: 312 },
  { name: "api.ts", complexity: 18, lines: 246 },
  { name: "Dashboard.tsx", complexity: 16, lines: 284 },
  { name: "useAuth.ts", complexity: 12, lines: 156 },
  { name: "formatters.ts", complexity: 9, lines: 178 },
  { name: "Table.tsx", complexity: 8, lines: 142 },
  { name: "userSlice.ts", complexity: 7, lines: 87 },
  { name: "Menu.tsx", complexity: 5, lines: 62 }
];

export const teamMembers = [
  {
    id: "tm-001",
    name: "Sarah Jenkins",
    score: 92,
    commits: 153,
    additions: 7842,
    deletions: 4231
  },
  {
    id: "tm-002",
    name: "Mike Chen",
    score: 87,
    commits: 127,
    additions: 5486,
    deletions: 3842
  },
  {
    id: "tm-003",
    name: "Alex Rodriguez",
    score: 76,
    commits: 98,
    additions: 4231,
    deletions: 2842
  },
  {
    id: "tm-004",
    name: "Taylor Kim",
    score: 69,
    commits: 82,
    additions: 3756,
    deletions: 1953
  },
  {
    id: "tm-005",
    name: "Jordan Smith",
    score: 64,
    commits: 74,
    additions: 2987,
    deletions: 1423
  }
] as Array<{
  id: string;
  name: string;
  score: number;
  commits: number;
  additions: number;
  deletions: number;
}>;

export const trendingMetrics = {
  qualityTrend: "+3.2% since last month",
  smellsTrend: "-5 since last analysis",
  coverageTrend: "+2.1% since last sprint",
  techDebtTrend: "-1d 4h since last month"
};

export const documentationData = [
  {
    id: "doc-1",
    title: "Code Quality Standards",
    content: "Our team follows a set of code quality standards to ensure maintainability and reliability. These include: proper naming conventions, function length limits, and test coverage requirements.",
    category: "standards",
    lastUpdated: "2025-04-15"
  },
  {
    id: "doc-2",
    title: "Best Practices",
    content: "Code review process, branch management strategy, and continuous integration practices are documented here.",
    category: "practices",
    lastUpdated: "2025-05-01"
  },
  {
    id: "doc-3",
    title: "Architecture Overview",
    content: "The overall architecture of our system, including dependency flow, module organization, and component relationships.",
    category: "architecture",
    lastUpdated: "2025-03-22"
  },
  {
    id: "doc-4",
    title: "Testing Strategy",
    content: "Our approach to unit testing, integration testing, and end-to-end testing, including coverage targets and tools used.",
    category: "testing",
    lastUpdated: "2025-04-28"
  }
];
