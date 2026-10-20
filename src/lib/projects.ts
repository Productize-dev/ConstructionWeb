export type ProjectCategory = "Residential" | "Development" | "Commercial";

export type Project = {
  src: string;
  name: string;
  place: string;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    src: "/images/hero-house.png",
    name: "Custom farmhouse",
    place: "Winston-Salem, NC",
    category: "Residential",
  },
  {
    src: "/images/portfolio-1.jpg",
    name: "3990",
    place: "Winston-Salem, NC",
    category: "Residential",
  },
  {
    src: "/images/portfolio-2.jpg",
    name: "4614",
    place: "Winston-Salem, NC",
    category: "Residential",
  },
  {
    src: "/images/portfolio-3.jpg",
    name: "Sun Meadows Dr",
    place: "Winston-Salem, NC",
    category: "Residential",
  },
  {
    src: "/images/portfolio-4.jpg",
    name: "Fairway Run Dr",
    place: "Clemmons, NC",
    category: "Residential",
  },
  {
    src: "/images/portfolio-5.jpg",
    name: "Fairway Run Dr",
    place: "Clemmons, NC",
    category: "Residential",
  },
  {
    src: "/images/portfolio-6.jpg",
    name: "Fairway Run Dr",
    place: "Clemmons, NC",
    category: "Residential",
  },
  {
    src: "/images/residential-2.jpg",
    name: "Craftsman residence",
    place: "Piedmont Triad, NC",
    category: "Residential",
  },
  {
    src: "/images/kitchen.jpg",
    name: "Kitchen finish",
    place: "Winston-Salem, NC",
    category: "Residential",
  },
  {
    src: "/images/residential-1.jpg",
    name: "Community home",
    place: "Hidden Woods Village",
    category: "Development",
  },
  {
    src: "/images/hero-hidden-woods.jpg",
    name: "Hidden Woods Village",
    place: "Piedmont Triad, NC",
    category: "Development",
  },
  {
    src: "/images/commercial-dental.jpg",
    name: "Dental office",
    place: "Piedmont Triad, NC",
    category: "Commercial",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.src.startsWith("/images/portfolio-")
);
