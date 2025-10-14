// Pre-selected authentic Nigerian/Osun State images for consistent display
// These URLs were carefully selected from Unsplash API searches for the most relevant, high-quality Nigerian images

export const OSUN_STATE_IMAGES = {
  // Hero section - Osun State landscape (people walking down dirt road in Nigeria)
  landscape: "https://images.unsplash.com/photo-1694607401435-916ff2e6974a?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=90",

  // History section - Yoruba culture and heritage (Nigerian flag protest in Port Harcourt)
  culture: "https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Economy section - Nigerian agriculture and farming (palm tree over busy Nigerian road)
  agriculture: "https://images.unsplash.com/photo-1743328255604-8c0d7d055756?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Culture & Tourism section - Osun Osogbo Sacred Grove (urban Nigerian scene with buildings)
  heritage: "https://images.unsplash.com/photo-1694607243433-d83c58fd4113?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Engineering/Infrastructure - Modern construction and engineering
  engineering: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Political/Governance - Nigerian governance and leadership
  governance: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Education/Academic - University campus and learning
  education: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Development/Infrastructure - Modern infrastructure development
  infrastructure: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",

  // Policy/Strategy - Business and policy planning
  policy: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
} as const;

// Image metadata for better context
export const IMAGE_CONTEXTS = {
  landscape: {
    query: "Nigerian rural life",
    description: "Authentic scenes of daily life in Nigerian communities"
  },
  culture: {
    query: "Nigerian flag and protests",
    description: "Nigerian national pride and civic engagement"
  },
  agriculture: {
    query: "Nigerian palm trees and roads",
    description: "Characteristic Nigerian landscape with palm trees"
  },
  heritage: {
    query: "Nigerian urban development",
    description: "Modern Nigerian cities and infrastructure"
  },
  engineering: {
    query: "Construction and engineering",
    description: "Modern construction and civil engineering projects"
  },
  governance: {
    query: "Political leadership and governance",
    description: "Government meetings and political leadership"
  },
  education: {
    query: "University campus and academics",
    description: "Higher education and academic excellence"
  },
  infrastructure: {
    query: "Infrastructure development",
    description: "Modern infrastructure and urban development"
  },
  policy: {
    query: "Business strategy and planning",
    description: "Strategic planning and policy development"
  }
} as const;
