// @data/navLinks.ts

export interface NavLink {
  name: string;
  href?: string; // optional if it's a dropdown
  megaMenu?: {
    title?: string;
    description?: string;
    links: { name: string; href: string }[];
  }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Industries',
    megaMenu: [
      {
        links: [
          { name: 'Banking & Financial Services', href: '/online-stores' },
          { name: 'Insurance', href: '/segmentation' },
          { name: 'Healthcare', href: '/marketing-crm' },
        ],
      },
      {
        links: [
          { name: 'Software & High tech', href: '/blog' },
          { name: 'Industrial', href: '/terms' },
          { name: 'Life Sciences', href: '/license' },
        ],
      },
      
    ],
  },
  {
    name: 'Services',
    href: '/services',
    megaMenu: [
      {
        links: [
          { name: 'Online Stores', href: '/online-stores' },
          { name: 'Segmentation', href: '/segmentation' },
          { name: 'Marketing CRM', href: '/marketing-crm' },
        ],
      },
      {
        links: [
          { name: 'Our Blog', href: '/blog' },
          { name: 'Terms & Conditions', href: '/terms' },
          { name: 'License', href: '/license' },
        ],
      },
      {
        title: 'Our brands',
        description: 'We have a portfolio of brands for every preference.',
        links: [],
      },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default navLinks;
