export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navbarMenuItems: [
    {label: "Home", href: "/", icon: "home"},
    {label: "Blog", href: "/blog", icon: "public"},
  ],
};
