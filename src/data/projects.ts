// TODO: replace with real project data — links, images, and case studies below are placeholders.

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  coverImage: string;
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  caseStudy?: {
    problem: string;
    architecture: string;
    features: string[];
    stack: string[];
    result: string;
  };
  proofofwork?: boolean;
}

export const projects: Project[] = [
  {
    slug: "techcart",
    title: "TechCart — E-commerce Web Application",
    tagline: "Full Stack E-Commerce",
    description:
      "Built a full-stack e-commerce application focused on providing a responsive and reliable shopping experience. Implemented product browsing, dynamic filtering, server-side search, product management, secure file uploads, API integration, and flexible MongoDB data modeling. Developed reusable frontend components and RESTful APIs while focusing on clean code, responsive UI, maintainability, and scalable application architecture.. ",
    tags: ["React", "Node.js","Next.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
    coverImage: "/projects/techcart-cover.png",
    liveUrl: "https://tech-cart-buyer-app.vercel.app",
    repoUrl: "https://github.com/Pravin671231/TechCart",
    featured: true,
    caseStudy: {
      problem: "Placeholder — the problem this project solved.",
      architecture: "Placeholder — how the system was structured.",
      features: ["Placeholder feature one", "Placeholder feature two"],
      stack: ["Next.js", "TypeScript", "MongoDB"],
      result: "Placeholder — the outcome/impact.",
    },
    proofofwork: true,
  },
  {
    slug: "movienest",
    title: "MovieNest — Movie Discovery Application",
    tagline: "Movie Discovery Platform",
    description:
      "A responsive movie discovery application built with React.js and TypeScript, featuring reusable API hooks, responsive layouts, and clean handling of loading, error, and movie data states using the TMDb API.",
    tags: ["React", "Tailwind CSS", "JavaScript", "TMDB API"],
    coverImage: "/projects/movienest-cover.png",
    liveUrl: "https://im-db-movie.netlify.app/",
    repoUrl: "https://github.com/Pravin671231/movies",
    featured: true,
    proofofwork: false,
  },
];
