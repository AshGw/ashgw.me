import Link from 'next/link';

import { Button } from '../../ui/button';
import { RepoSourceCodeButton } from './RepoSourceCodeButton';

export function RightNav() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
      <div className="average-transition hover:average-translate z-50">
        <RepoSourceCodeButton />
      </div>
      <div className="glowsup hidden sm:block">
        <Link href="/contact">
          <Button className="w-full" variant={'navbar'}>
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
}
