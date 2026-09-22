export type CaseStudy = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  Challenge: string;
  Implementation: string[];
  Outcome: string;
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "server-side-product-search",
    number: "01",
    title: "Server-Side Product Search",
    category: "Backend & Database",
    description:
      "Implemented scalable product search by moving keyword matching from the client to the server.",
    Challenge:
      "Client-side product search required downloading the full product catalog to the browser, increasing data transfer and reducing scalability as the catalog grew.",
    Implementation: [
      "Added the q query parameter to the Get Products API for server-side keyword search.",
      "Implemented case-insensitive partial matching across product name and description using MongoDB regex.",
      "Used MongoDB $facet to fetch paginated products and the total matching count in a single aggregation query.",
    ],
    Outcome:
      "Implemented server-side product search with efficient pagination and total result counting in a single database query.",

    technologies: ["MongoDB", "Mongoose", "TypeScript", "REST API"],
  },

  {
    id: "dynamic-filtering",
    number: "02",
    title: "Dynamic Filtering",
    category: "Backend & Database",
    description:
      "Built backend-driven category filters that dynamically adapt to product data.",
    Challenge:
      "Static filter definitions are difficult to maintain when different product categories have varying brands, specifications, variants, and price ranges.",
    Implementation: [
      "Built a GET /api/categories/:slug/filters API to dynamically generate category-specific filter options.",
      "Derived brands, price ranges, specification ranges, and variant axes from active category products using backend aggregation logic.",
      "Used Mongoose and MongoDB with parallel queries to efficiently build the complete filter configuration.",
    ],
    Outcome:
      "Generated dynamic, backend-driven category filters, eliminating hardcoded frontend filter configurations.",
    technologies: [
      "TypeScript",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "REST API",
      "MongoDB Aggregation",
    ],
  },

  {
    id: "secure-r2-upload-workflow",
    number: "03",
    title: "Secure R2 Upload Workflow",
    category: "Security & Infrastructure",
    description:
      "Designed a secure direct-upload workflow for product and category images using Cloudflare R2.",
    Challenge:
      "Product and category images needed secure uploads without exposing storage credentials or unnecessarily routing large files through the application server.",
    Implementation: [
      "Implemented admin-only presigned upload APIs for Cloudflare R2 with MIME type validation and UUID-based object keys.",
      "Added upload tracking and single-use object-key validation to ensure only server-issued upload keys can be attached to entities.",
      "Implemented image count validation and primary-image normalization across products, brands, and categories.",
    ],
    Outcome:
      "Implemented Secure R2 uploads with direct storage transfer, unique object keys, and consistent image validation.",
    technologies: [
      "TypeScript",
      "Express.js",
      "Cloudflare R2",
      "Presigned URLs",
      "REST API",
      "RBAC",
    ],
  },

  {
    id: "dynamic-category-specification",
    number: "04",
    title: "Dynamic Category Specification System",
    category: "Architecture & Data Modeling",
    description:
      "Created a flexible category specification system without hardcoding category-specific product schemas.",
    Challenge:
      "Product categories require flexible specifications with different field types, units, options, required fields, and validation rules.",
    Implementation: [
      "Built a category-level specification API at PATCH /api/admin/categories/:id/specifications.",
      "Implemented grouped fields, typed values, enums, units, required fields, and filterable attributes.",
      "Added service-layer validation for duplicate groups and fields, type validation, required fields, and enum options.",
      "Added reference-aware update and delete guards to prevent removing specification fields or groups already used by products.",
    ],
    Outcome:
      "Implemented flexible category-specific product specifications with consistent validation and safe schema changes.",
    technologies: ["Mongoose", "MongoDB", "TypeScript", "REST API"],
  },
];
