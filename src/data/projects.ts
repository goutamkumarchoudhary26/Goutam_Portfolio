import type { ProjectEntry } from '@models/project'

export const projects: ProjectEntry[] = [
  {
    slug: 'qualibuddy',
    title: 'Qualibuddy',
    category: 'AI / RAG / Conversational AI',
    categories: ['ai', 'full-stack'],
    tagline:
      'An AI-powered RAG chatbot that retrieves accurate information from organizational data.',
    technologies: [
      'React.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'ChromaDB',
      'LLM',
      'RAG',
      'Docker',
      'AWS',
      'CI/CD',
    ],
    role: 'Lead UI Engineer, contributing across the full stack',
    timeline: '2025',
    impact: 'Retrieves accurate answers from organizational data using RAG over ChromaDB.',
    problem:
      'Teams needed fast, accurate answers from large volumes of organizational documentation, but manual search across scattered sources was slow and inconsistent.',
    solution:
      'The system converts user queries into vector embeddings, searches relevant content in ChromaDB, and passes the retrieved context to an LLM to generate accurate, grounded responses.',
    architectureNotes:
      'A React + TypeScript frontend talks to a FastAPI backend, which orchestrates embedding generation, similarity search against ChromaDB, and LLM calls, with PostgreSQL for structured data. The service is containerized with Docker and deployed on AWS through a CI/CD pipeline.',
    challenges: [
      {
        challenge: 'Ensuring retrieved context stayed relevant across varied query phrasing.',
        resolution:
          'Tuned the embedding and retrieval pipeline and iterated on chunking strategy for the source documents.',
      },
      {
        challenge: 'Keeping response latency acceptable for an interactive chat experience.',
        resolution:
          'Streamlined the retrieval-to-generation pipeline and containerized the service for consistent deployment.',
      },
    ],
    outcome:
      'Gives teams a conversational interface for finding accurate, source-grounded answers from internal data instead of manually searching through documents.',
  },
  {
    slug: 'qualisense',
    title: 'Qualisense',
    category: 'AI / Machine Learning Platform',
    categories: ['ai', 'data-visualization'],
    tagline:
      'An automated no-code machine learning platform for guided predictive model creation.',
    technologies: ['React', 'Python', 'AI', 'LLM', 'NLP', 'Data Visualization'],
    role: 'Lead UI Engineer',
    timeline: '2022 – 2023',
    impact: 'Simplifies predictive model creation through a guided, no-code workflow.',
    problem:
      'Building predictive models typically requires machine learning expertise, which puts it out of reach for teams that want to experiment with their data directly.',
    solution:
      'Qualisense guides users through a no-code workflow to prepare data, choose from more than 40 supported algorithms, and produce a predictive model without writing code.',
    architectureNotes:
      'A React frontend presents the guided workflow, while a Python backend handles data processing, model training across the supported algorithms, and result visualization.',
    challenges: [
      {
        challenge: 'Supporting 40+ algorithms behind a single, consistent guided workflow.',
        resolution:
          'Designed a step-based UI that abstracts algorithm-specific configuration behind a common interface.',
      },
    ],
    outcome:
      'Lets non-specialist users go from raw data to a working predictive model through a guided interface.',
  },
  {
    slug: 'devx',
    title: 'DevX',
    category: 'Generative AI / QA Automation',
    categories: ['ai', 'frontend'],
    tagline: 'An AI-powered platform that simplifies prompt creation for QA and testing.',
    technologies: ['React', 'LLM', 'Generative AI', 'Prompt Engineering', 'Chatbot UI'],
    role: 'Lead UI Engineer',
    timeline: '2024',
    impact: 'Uses LLMs and prompt engineering to simplify prompt creation for QA workflows.',
    problem:
      'Writing and refining effective prompts for QA and software testing tasks is time-consuming and requires iterative trial and error.',
    solution:
      'DevX provides a chatbot-style interface backed by LLMs and prompt-engineering techniques that helps testers create and refine prompts for their QA workflows.',
    architectureNotes:
      'A React-based chatbot UI sends prompt-refinement requests to an LLM service, presenting iterative suggestions back to the user in a conversational format.',
    challenges: [
      {
        challenge: 'Making prompt refinement feel conversational rather than form-driven.',
        resolution: 'Built a chatbot UI so refinement happens through natural back-and-forth.',
      },
    ],
    outcome: 'Reduces the friction of writing effective prompts for QA and testing tasks.',
  },
  {
    slug: 'duplication-detection',
    title: 'Duplication Detection',
    category: 'AI / NLP / LLM',
    categories: ['ai', 'full-stack'],
    tagline: 'A tool that identifies and clusters near-duplicate and semantically similar text.',
    technologies: ['Python', 'LLM', 'OpenAI', 'Ollama', 'NLP', 'React', 'APIs'],
    role: 'Lead UI Engineer, contributing across the full stack',
    timeline: '2024',
    impact: 'Clusters near-duplicate and semantically similar text using LLMs.',
    problem:
      'Large text datasets often contain near-duplicate or semantically overlapping entries that are hard to catch with simple exact-match comparisons.',
    solution:
      'The tool uses LLMs (via OpenAI and locally-run Ollama models) to compare text semantically and cluster near-duplicate or similar entries together.',
    architectureNotes:
      'A Python backend exposes APIs that run text through LLM-based similarity comparisons, using both OpenAI and Ollama for flexibility between hosted and local inference, with a React frontend for reviewing clusters.',
    challenges: [
      {
        challenge: 'Balancing accuracy of semantic similarity with processing cost.',
        resolution:
          'Supported both hosted (OpenAI) and local (Ollama) models so the approach could be chosen per use case.',
      },
    ],
    outcome:
      'Surfaces near-duplicate and semantically similar text that exact-match approaches would miss.',
  },
  {
    slug: 'qualiview',
    title: 'QualiView',
    category: 'Data Visualization',
    categories: ['data-visualization', 'frontend'],
    tagline:
      'A visualization platform supporting tables, charts, and Grafana-based dashboards.',
    technologies: ['React', 'Grafana', 'Data Visualization'],
    role: 'Lead UI Engineer',
    timeline: '2023',
    impact: 'Comprehensive visualization platform spanning tables, charts and dashboards.',
    problem:
      'Different stakeholders needed to view the same underlying data in different formats, from raw tables to executive dashboards.',
    solution:
      'QualiView provides tables, bar charts, grouped bar charts and pie charts alongside embedded Grafana-based dashboards, so data can be viewed in whichever format suits the audience.',
    architectureNotes:
      'A React frontend renders the tables and chart components, and embeds Grafana dashboards for more advanced, ops-style monitoring views.',
    challenges: [
      {
        challenge: 'Keeping a consistent look and feel between custom charts and embedded Grafana dashboards.',
        resolution:
          'Standardized on shared layout and theming conventions across the custom visualization components.',
      },
    ],
    outcome:
      'Gives different stakeholders the visualization format that best fits how they need to consume the data.',
  },
  {
    slug: 'axis-bank-uk',
    title: 'Axis Bank UK',
    category: 'Banking / Financial Technology',
    categories: ['frontend'],
    tagline: 'A cross-platform banking application for retail, corporate and mutual fund workflows.',
    technologies: ['JavaScript', 'CSS3', 'Bootstrap', 'SQL', 'Appzillon'],
    role: 'UI Developer',
    timeline: '2018 – 2020',
    impact: 'Cross-platform banking application supporting retail, corporate and branch workflows.',
    problem:
      'The bank needed a single application that could support retail, corporate, branch and mutual fund workflows across platforms.',
    solution:
      'Built a cross-platform banking application covering retail, corporate, branch and mutual fund workflows using JavaScript, CSS3, Bootstrap and the Appzillon platform.',
    architectureNotes:
      'A JavaScript/CSS3/Bootstrap frontend built on the Appzillon platform, backed by SQL for data storage, supporting the distinct workflows for each banking channel.',
    challenges: [
      {
        challenge: 'Supporting several distinct banking workflows within one consistent application.',
        resolution:
          'Structured UI components so retail, corporate, branch and mutual fund workflows could share common patterns.',
      },
    ],
    outcome:
      'Delivered a consistent cross-platform experience across retail, corporate, branch and mutual fund banking workflows.',
  },
]
