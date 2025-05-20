
// Mock data for code analytics dashboard based on this application's own code

export const codeQualityMetrics = {
  overall: 82,
  maintainability: 87,
  reliability: 79,
  security: 85,
  duplication: 5.2,
  testCoverage: 68.5,
  codeSmells: 18,
  bugs: 3,
  vulnerabilities: 1,
  techDebt: "2d 6h"
};

export const codeSmells = [
  {
    id: "cs-001",
    file: "src/components/ui/sidebar.tsx",
    line: 762,
    type: "Size",
    severity: "high",
    message: "File is extremely large (762 lines). Consider breaking it into smaller components"
  },
  {
    id: "cs-002",
    file: "src/pages/Team.tsx",
    line: 219,
    type: "Size",
    severity: "medium",
    message: "Component is too large (219 lines). Consider extracting sub-components"
  },
  {
    id: "cs-003",
    file: "src/components/ComplexityChart.tsx",
    line: 76,
    type: "TypeScript",
    severity: "high",
    message: "Type error: fill prop expects string but receives function"
  },
  {
    id: "cs-004",
    file: "src/components/TeamPerformance.tsx",
    line: 36,
    type: "Performance",
    severity: "medium",
    message: "Sorting operation performed on each render"
  },
  {
    id: "cs-005",
    file: "src/components/CodeSmellList.tsx",
    line: 23,
    type: "Maintainability",
    severity: "low",
    message: "Function could be extracted to avoid duplication"
  },
  {
    id: "cs-006",
    file: "src/components/CodeAnalyticsSidebar.tsx",
    line: 55,
    type: "TypeScript",
    severity: "high",
    message: "Type 'true' is not assignable to type 'offcanvas' | 'icon' | 'none'"
  },
  {
    id: "cs-007",
    file: "src/pages/Team.tsx",
    line: 54,
    type: "TypeScript",
    severity: "medium",
    message: "Property 'avatar' does not exist on TeamMember type"
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
  { name: "sidebar.tsx", complexity: 31, lines: 762 },
  { name: "Team.tsx", complexity: 18, lines: 219 },
  { name: "Index.tsx", complexity: 14, lines: 186 },
  { name: "CodeAnalyticsSidebar.tsx", complexity: 10, lines: 106 },
  { name: "ComplexityChart.tsx", complexity: 8, lines: 90 },
  { name: "TeamPerformance.tsx", complexity: 7, lines: 82 },
  { name: "CodeSmellList.tsx", complexity: 6, lines: 77 },
  { name: "QualityScore.tsx", complexity: 5, lines: 45 }
];

export const teamMembers = [
  {
    id: "tm-001",
    name: "Alex Morgan",
    score: 91,
    commits: 142,
    additions: 8624,
    deletions: 3218,
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: "tm-002",
    name: "Jamie Chen",
    score: 86,
    commits: 127,
    additions: 5982,
    deletions: 2435,
    avatar: "https://i.pravatar.cc/150?u=jamie"
  },
  {
    id: "tm-003",
    name: "Taylor Swift",
    score: 78,
    commits: 98,
    additions: 4231,
    deletions: 1842,
    avatar: "https://i.pravatar.cc/150?u=taylor"
  },
  {
    id: "tm-004",
    name: "Jordan Lee",
    score: 73,
    commits: 76,
    additions: 3692,
    deletions: 1584,
    avatar: "https://i.pravatar.cc/150?u=jordan"
  },
  {
    id: "tm-005",
    name: "Casey Jones",
    score: 68,
    commits: 65,
    additions: 2854,
    deletions: 1163,
    avatar: "https://i.pravatar.cc/150?u=casey"
  }
] as Array<{
  id: string;
  name: string;
  score: number;
  commits: number;
  additions: number;
  deletions: number;
  avatar: string;
}>;

export const trendingMetrics = {
  qualityTrend: "+4.3% since last month",
  smellsTrend: "-7 since last analysis",
  coverageTrend: "+1.8% since last sprint",
  techDebtTrend: "-12h since last month"
};

export const documentationData = [
  {
    id: "doc-1",
    title: "Dashboard Components",
    content: "The dashboard uses a component-based architecture with reusable UI elements like QualityScore, ComplexityChart, and CodeSmellList for visualizing code quality metrics.",
    category: "architecture",
    lastUpdated: "2025-05-15"
  },
  {
    id: "doc-2",
    title: "Sidebar Navigation",
    content: "The CodeAnalyticsSidebar component provides navigation between different dashboard views, including the main dashboard, code quality metrics, code smells, and team performance.",
    category: "components",
    lastUpdated: "2025-05-12"
  },
  {
    id: "doc-3",
    title: "Data Visualization",
    content: "The application uses Recharts for data visualization, with custom styling and tooltips to maintain design consistency across the application.",
    category: "ui",
    lastUpdated: "2025-05-08"
  },
  {
    id: "doc-4",
    title: "Code Analysis Metrics",
    content: "Our code metrics include complexity scores based on function size and cognitive complexity, code smells detection, and quality scores for maintainability, reliability, and security.",
    category: "metrics",
    lastUpdated: "2025-05-01"
  }
];

