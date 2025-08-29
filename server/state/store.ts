import { EventEmitter } from "events";
import { featuredPost } from "@shared/blog-data";
import { featuredEvent } from "@shared/programs-data";
import { allChildren } from "@shared/children-data";
import type { SiteContent } from "@shared/site-content";

class ContentStore extends EventEmitter {
  private state: SiteContent;

  constructor() {
    super();
    this.state = {
      hero: {
        images: [
          {
            src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2F0417d8d5fa4c4c179a585018273842e1?format=webp&width=800",
            quote: "Every child deserves a chance to shine",
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2Fe188b6ea2bc94b82ae48a0f7509dc12a?format=webp&width=800",
            quote: "Together, we can build a brighter future",
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2F26d9b79fb301411bb6a581aed3db1493?format=webp&width=800",
            quote: "Hope is the light that guides us forward",
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets%2Fde779a14d1ab4ec09cf8fa4e9c38ad5e%2Fde0dc405e48c4e8a96b2550349dbee45?format=webp&width=800",
            quote: "Small acts of kindness create lasting change",
          },
        ],
      },
      about: {
        image:
          "https://i.ibb.co/vxjcpZjD/Screenshot-from-2025-08-12-23-27-35.png",
        heading: "About Tabasamu Charity",
        paragraph1:
          "Tabasamu Charity is dedicated to transforming lives and building stronger communities through education, healthcare, and sustainable development. Since our founding, we've been committed to creating lasting positive change for children and families across Kenya.",
        paragraph2:
          "Our comprehensive programs focus on providing quality education, essential healthcare services, and opportunities for community development. Together with our volunteers and supporters, we're building a brighter future for the next generation.",
      },
      help: [
        {
          icon: "TrendingUp",
          title: "Start investing in our volunteer group",
          description:
            "Join our growing community of dedicated volunteers making real change.",
        },
        {
          icon: "Droplets",
          title: "Because Everyone Deserves Clean Water",
          description:
            "Help us provide access to clean, safe drinking water for all.",
        },
        {
          icon: "GraduationCap",
          title: "Childhood Education development support",
          description:
            "Support educational programs that give children the tools for success.",
        },
        {
          icon: "Utensils",
          title: "Child Deserves Better Healthy Foods",
          description:
            "Ensure children have access to nutritious meals for healthy growth.",
        },
      ],
      stats: [
        { number: "72+", label: "Total Campaigns" },
        { number: "96+", label: "Become Volunteer" },
        { number: "8K+", label: "Quick Fundraise" },
        { number: "87+", label: "Happy Volunteers" },
      ],
      featuredEvent,
      featuredBlog: featuredPost,
      children: allChildren,
    };
  }

  getState(): SiteContent {
    return this.state;
  }

  setState(next: Partial<SiteContent>) {
    this.state = { ...this.state, ...next } as SiteContent;
    this.emit("change", this.state);
  }

  update<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    this.state = { ...this.state, [key]: value } as SiteContent;
    this.emit("change", this.state);
  }
}

export const store = new ContentStore();
