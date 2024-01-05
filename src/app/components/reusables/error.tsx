'use client';

import { useEffect } from 'react';

export default function UIError({ error }: { error: Error }) {
  useEffect(() => {
    // need sme actual logging no BS
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>
        Ah shit..some went bad, might as well refresh and see what happends G
      </p>
    </div>
  );
}
