export interface FeaturedEvent {
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  image: string;
  theme: string;
  message: string;
  itemsNeeded: string[];
  contact: string;
  paymentLink: string;
  fullDescription: string;
  schedule: Array<{ time: string; activity: string }>;
  impactGoals: string[];
}

export const featuredEvent: FeaturedEvent = {
  title: "NAIROBI Edition",
  subtitle: "Creating smiles, one coin at a time😊",
  date: "19TH OCT 2025",
  venue: "BLESSINGS CHILDREN'S HOME - RUAI",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F1621da4a27844381af3e9ee9867abbdf%2F11507f84a3b5427fafee2b9a7a5b66c7?format=webp&width=800",
  theme: "Global harmony begins with kindness",
  message:
    "Hi there😊\n\nIn pursuit of my course of making the world a better place, I can't do it alone, I need more hands🥹... Shall we?\nCreating smiles, one coin at a time😊",
  itemsNeeded: [
    "Dry Foodstuffs",
    "Water",
    "Detergent",
    "Sanitary Towels",
    "Beddings",
    "Monetary support",
  ],
  contact: "+254112459483",
  paymentLink: "https://zenlipa.co.ke/c/uKowYx",
  fullDescription:
    "Join us for an unforgettable day of giving and community spirit at the NAIROBI Edition event. This special gathering brings together hearts and hands united in a common mission: to spread joy and create lasting smiles in the lives of children who need it most.\n\nLocated at the beautiful Blessings Children's Home in Ruai, this event represents more than just a donation drive - it's a celebration of humanity, kindness, and the power we have when we come together for a noble cause.\n\nWhat makes this event special:\n• Direct impact on children's lives\n• Community building and networking\n• Hands-on volunteer opportunities\n• Stories of transformation and hope\n• Cultural performances and activities\n\nEvery contribution, whether big or small, creates ripples of positive change that extend far beyond the event day. Together, we're not just giving items - we're giving hope, dignity, and the promise of a brighter tomorrow.",
  schedule: [
    { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
    { time: "10:00 AM", activity: "Opening Ceremony & Speeches" },
    { time: "11:00 AM", activity: "Donation Distribution Begins" },
    { time: "12:30 PM", activity: "Cultural Performances by Children" },
    { time: "1:00 PM", activity: "Lunch & Networking" },
    { time: "2:30 PM", activity: "Volunteer Activities & Games" },
    { time: "4:00 PM", activity: "Closing Ceremony & Group Photos" },
  ],
  impactGoals: [
    "Provide essential supplies to 200+ children",
    "Fund educational materials for 50 students",
    "Support nutritional programs for 3 months",
    "Create sustainable partnerships with local community",
  ],
};

// For homepage - recent programs (showing the featured event)
export const recentPrograms = [
  {
    image: featuredEvent.image,
    title: `${featuredEvent.title} - ${featuredEvent.subtitle}`,
    description: featuredEvent.fullDescription.split("\n\n")[0], // First paragraph
    date: featuredEvent.date,
    venue: featuredEvent.venue,
  },
];
