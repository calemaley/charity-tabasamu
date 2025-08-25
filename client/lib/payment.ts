// Payment configuration and utilities
export interface PaymentConfig {
  donationUrl: string;
  sponsorshipUrl: string;
  generalUrl: string;
  volunteerUrl: string;
}

// Payment URLs - Using Zenlipa payment processor
export const PAYMENT_URLS: PaymentConfig = {
  // Main donation page - for general donations
  donationUrl: "https://zenlipa.co.ke/c/uKowYx",

  // Child sponsorship payments
  sponsorshipUrl: "https://zenlipa.co.ke/c/uKowYx",

  // General support payments
  generalUrl: "https://zenlipa.co.ke/c/uKowYx",

  // Volunteer program support
  volunteerUrl: "https://zenlipa.co.ke/c/uKowYx",
};

// Payment redirection function
export const redirectToPayment = (
  type: keyof PaymentConfig,
  options?: {
    amount?: number;
    childId?: string;
    campaign?: string;
    source?: string;
  },
) => {
  let url = PAYMENT_URLS[type];

  // Add query parameters if provided
  const params = new URLSearchParams();

  if (options?.amount) {
    params.append("amount", options.amount.toString());
  }

  if (options?.childId) {
    params.append("child_id", options.childId);
  }

  if (options?.campaign) {
    params.append("campaign", options.campaign);
  }

  if (options?.source) {
    params.append("source", options.source);
  }

  if (params.toString()) {
    url += "?" + params.toString();
  }

  // Open in new tab to preserve user's current session
  window.open(url, "_blank", "noopener,noreferrer");
};

// Quick donation amounts for buttons
export const DONATION_AMOUNTS = {
  small: 25,
  medium: 50,
  large: 100,
  sponsor: 75, // Monthly sponsorship amount
};

// Campaign tracking for analytics
export const CAMPAIGN_SOURCES = {
  hero: "hero-section",
  cta: "call-to-action",
  children: "meet-children",
  about: "about-page",
  blog: "blog-post",
  contact: "contact-page",
  navigation: "navigation-menu",
  footer: "footer-section",
  programs: "programs-page",
};
