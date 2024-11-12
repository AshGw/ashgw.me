type Name = 'Home' | 'Blog' | 'Services' | 'Contact';
type NavLinks = { name: Name; href: string; hidden: boolean }[];

export const navLinks: NavLinks = [
  { name: 'Home', href: '/', hidden: false },
  { name: 'Blog', href: '/blog', hidden: false },
  { name: 'Services', href: '/services', hidden: true },
  { name: 'Contact', href: '/contact', hidden: false },
] as const;
