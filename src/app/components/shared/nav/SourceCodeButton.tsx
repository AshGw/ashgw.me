import { GitBranch } from 'lucide-react';
import NextLink from 'next/link';

interface SourceCodeButtonProps {
  href: string;
}
export function SourceCodeButton({ href }: SourceCodeButtonProps) {
  return (
    <button>
      <NextLink href={href} target="_blank" rel="noopener noreferrer">
        <GitBranch
          strokeWidth={'1.5px'}
          size={'20px'}
          style={{
            display: 'inline-block',
            marginLeft: '5px',
            marginBottom: '3px',
          }}
        />
      </NextLink>
    </button>
  );
}
