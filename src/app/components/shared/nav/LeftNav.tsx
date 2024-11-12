import Link from 'next/link';

import { navLinks } from './navLinks';

export function LeftNav() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-12">
        {navLinks.map(({ name, href }) => (
          <Link
            key={name}
            className="nav-link-shadow dimmed-3 font-semibold average-transition hover:average-translate hover:text-white"
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
