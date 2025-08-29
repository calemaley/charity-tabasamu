import type { BlogPost } from "./blog-data";
import type { FeaturedEvent } from "./programs-data";
import type { Child } from "./children-data";

export interface HeroImage {
  src: string;
  quote: string;
}

export interface HelpItem {
  icon: "TrendingUp" | "Droplets" | "GraduationCap" | "Utensils" | string;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface SiteContent {
  hero: {
    images: HeroImage[];
  };
  about: {
    image: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  help: HelpItem[];
  stats: StatItem[];
  featuredEvent: FeaturedEvent;
  featuredBlog: BlogPost;
  children: Child[]; // full list; UI can choose featured subset
}
