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
  { name: 'Solutions', href: '/services'},
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default navLinks;
