export interface NavLink {
    name: string;
    href: string;
  }
  
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];
  
  export default navLinks;
  