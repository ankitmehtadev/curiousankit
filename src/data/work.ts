// The Work page (/work/): a web version of my résumé, drawn from all its versions.
// Edit freely. Phone number, personal email, citizenship and notice period are left off on purpose.

export const WORK_INTRO = {
  heading: 'Work',
  lede: "10+ years in business analysis and digital delivery across banking, life insurance, gambling, energy and education. I lead analysis teams, build the methods they keep using, and bring AI into how work actually gets done.",
};

// Big numbers at the top. Keep to four or six.
export const OUTCOMES = [
  { figure: '2 months → 3 weeks', text: 'Requirements processing at MACS, with a Claude Project now standard for the team' },
  { figure: '2 months → 3 days', text: 'Award rate change turnaround at Tabcorp, using Claude Code against a written rules spec' },
  { figure: '$900K+', text: 'Funding secured through business cases at Tabcorp' },
  { figure: '2,500+', text: 'Requirements captured by my team under one standard method' },
  { figure: '25+ in 3 months', text: 'Members in the BA Community of Practice I cofounded at MLC' },
  { figure: '$300K a year', text: 'Saved by the Advisor and Customer Portal redesign at MLC' },
];

// What I'm good at, in three tiles.
export const STRENGTHS = [
  {
    title: 'Leading analysis teams',
    text: 'Leading BA teams, writing the standards, templates and playbooks they work to, and coaching people until the methods stick.',
  },
  {
    title: 'Transformation and vendor selection',
    text: 'Defining the problem with executives, building the business case, running RFI to RFP, and staying through cutover and hypercare.',
  },
  {
    title: 'AI in real work',
    text: 'Finding and prioritising AI use cases, building working AI workflows, assessing vendor AI roadmaps, and the governance that goes with it.',
  },
];

export type Role = {
  title: string;
  org: string;
  dates: string;
  context?: string;
  points: string[];
};

export const EXPERIENCE: Role[] = [
  {
    title: 'Lead Business Analyst',
    org: 'Melbourne Archdiocese Catholic Schools (MACS)',
    dates: 'May 2026 – present',
    context:
      'Leading a team of four BAs on Wave 2 of the Digital Reimagination Program, across six capability domains for around 300 schools.',
    points: [
      'Set the BA plan, approach and standards for Wave 2, and introduced one capture and traceability method that the team uses for 2,500+ requirements.',
      'Built a Claude Project that turns stakeholder notes into requirements, traceability and RAID updates and reports, cutting manual processing from two months to three weeks. It is now standard for the BAs and solution architects.',
      'Documented and prioritised AI use cases with three business units, built a Copilot Studio agent to score vendor RFI responses, and assessed vendors’ AI roadmaps.',
      'Led current to future state mapping of 80+ processes ahead of schedule, and built the Wave 2 business case with the program manager.',
    ],
  },
  {
    title: 'Lead Business Analyst',
    org: 'Tabcorp',
    dates: 'Apr 2023 – May 2026',
    context:
      'SaaS selection and enterprise transformation for People and Culture, Finance, Procurement and Internal Communications, with delivery teams in six countries.',
    points: [
      'Managed five BAs on an $8M Oracle Fusion ERP upgrade, wrote their development plans, and wrote a BA playbook and process mapping notation that every BA adopted.',
      'Selected Reward Gateway, Staffbase and pmo365 through RFI, RFQ and RFP, then took all three to adoption, ahead of schedule and under budget.',
      'Owned a custom award interpretation engine paying 2,000+ employees under 16 awards. Used Claude Code to fix defects and automate reconciliation, cutting rate change turnaround from 2 months to 3 business days.',
      'Wrote business cases that secured over $900,000, and brought eight siloed divisions under a single ERP operating model.',
    ],
  },
  {
    title: 'Lead Technical Business Analyst',
    org: 'MLC Life Insurance',
    dates: 'Apr 2022 – Apr 2023',
    context: 'Advisor and Customer Portals used by 350,000+ policyholders, in a tightly regulated environment.',
    points: [
      'Led requirements, data and API analysis for a full portal redesign across multiple SAFe teams, saving $300K a year after go live.',
      'Prioritised new digital payment options that lifted self service adoption by 25%.',
      'Led three BAs and cofounded a BA Community of Practice that grew to 25+ members in three months, with executive sponsorship.',
    ],
  },
  {
    title: 'Senior Technical Business Analyst',
    org: 'Capgemini, for ANZ Bank',
    dates: 'Sep 2021 – Apr 2022',
    context: 'An enterprise cloud program migrating 3,000+ applications to AWS and GCP.',
    points: [
      'Worked as BA and Scrum Master across four agile squads in Australia, India and Malaysia.',
      'Built reusable migration playbooks that cut average effort by 30% and typical timelines from 12 to 8 weeks per application.',
      'Mapped interfaces and dependencies that set migration order, contributing to a 40% drop in post migration incidents.',
    ],
  },
];

export const EARLIER: Role[] = [
  {
    title: 'Project Delivery Lead',
    org: 'Next Business Energy',
    dates: 'Mar 2021 – Sep 2021',
    points: ['Company wide process mapping that uncovered $400K+ in annual revenue leakage.'],
  },
  {
    title: 'Technical Business Analyst',
    org: 'The Ava Group',
    dates: 'Jan 2018 – Mar 2021',
    points: ['Requirements for a fibre optic intrusion detection system, plus a versioning tool that halved manual effort.'],
  },
  {
    title: 'Systems Analyst',
    org: 'Monash University',
    dates: 'Jul 2016 – Dec 2017',
    points: ['Led the adoption of Splunk and automated triage, halving service desk resolution time.'],
  },
  {
    title: 'Software Developer',
    org: 'Yardi Software, Pune',
    dates: 'Jan 2015 – Dec 2015',
    points: ['Property management system features in .NET and SQL.'],
  },
];

export const TEACHING = {
  title: 'Teaching Associate Lead',
  org: 'Monash University',
  dates: 'Feb 2018 – present',
  text: 'I design and run workshops on business analysis, Agile delivery and digital solution design for postgraduate students in the final semester Industry Experience capstone, and coach every cohort through their analysis work.',
};

export const EDUCATION = [
  { name: 'Master of Business Information Systems', org: 'Monash University', year: '2017' },
  { name: 'Master of Science in Computer Applications', org: 'Symbiosis International University', year: '2015' },
  { name: 'Bachelor of Computer Applications (Honours)', org: 'The Maharaja Sayajirao University of Baroda', year: '2013' },
];

export const CERTIFICATIONS = [
  { name: 'IAPP Artificial Intelligence Governance Professional (AIGP)', year: 'In progress' },
  { name: 'ISO/IEC 42001 Lead Implementer, AI Management Systems', year: 'In progress' },
  { name: 'Accredited Mental Health First Aider', year: '2025' },
  { name: 'PRINCE2 Foundation', year: '2024' },
  { name: 'AWS Certified Cloud Practitioner', year: '2022' },
  { name: 'Certified SAFe 5 Practitioner', year: '2021' },
  { name: 'Microsoft Certified Power BI Data Analyst Associate', year: '2020' },
  { name: 'Certified Professional Scrum Master', year: '2018' },
];

export const TOOLKIT = [
  'Jira',
  'Confluence',
  'Azure DevOps',
  'Miro',
  'Lucidchart',
  'Visio',
  'BPMN 2.0',
  'Agile, SAFe, PRINCE2',
  'Claude, Claude Code',
  'Copilot Studio',
  'Power BI',
  'Oracle Fusion',
];
