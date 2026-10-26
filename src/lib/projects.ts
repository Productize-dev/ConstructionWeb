export type ProjectCategory = "Residential" | "Development" | "Commercial";

export type Project = {
  src: string;
  name: string;
  place: string;
  category: ProjectCategory;
  href?: string;
};

export const projects: Project[] = [
  {
    src: "/images/maple/01.jpg",
    name: "1348 Maple Chase Lane",
    place: "Brookberry",
    category: "Residential",
    href: "/portfolio/1348-maple",
  },
  {
    src: "/images/hidden-woods/223/01.jpg",
    name: "Hidden Woods Village",
    place: "Timber Hill Court",
    category: "Development",
    href: "/portfolio/hidden-woods",
  },
  {
    src: "/images/hero-house.jpg",
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
    href: "/portfolio/hidden-woods",
  },
  {
    src: "/images/hero-hidden-woods.jpg",
    name: "Hidden Woods Village",
    place: "Piedmont Triad, NC",
    category: "Development",
    href: "/portfolio/hidden-woods",
  },
  {
    src: "/images/commercial-dental.jpg",
    name: "Dental office",
    place: "Piedmont Triad, NC",
    category: "Commercial",
  },
  {
    src: "/images/residence-front.jpg",
    name: "Front elevation",
    place: "Piedmont Triad, NC",
    category: "Residential",
  },
  {
    src: "/images/residence-side.jpg",
    name: "Side elevation",
    place: "Piedmont Triad, NC",
    category: "Residential",
  },
  {
    src: "/images/residence-rear.jpg",
    name: "Rear elevation",
    place: "Piedmont Triad, NC",
    category: "Residential",
  },
  {
    src: "/images/living-01.jpg",
    name: "Living room",
    place: "Piedmont Triad, NC",
    category: "Residential",
  },
  {
    src: "/images/living-02.jpg",
    name: "Living room",
    place: "Piedmont Triad, NC",
    category: "Residential",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.src.startsWith("/images/portfolio-")
);
