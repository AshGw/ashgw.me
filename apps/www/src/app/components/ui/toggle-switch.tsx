import React from 'react';

import { cn } from '../../../lib/utils';

interface ToggleSwitchProps {
  leftButtonText: string;
  rightButtonText: string;
  isToggled: boolean;
  onToggle: (state: boolean) => void;
  className?: string; // You can keep this to handle the rest of the div's props
}

export const ToggleSwitch = React.forwardRef<HTMLDivElement, ToggleSwitchProps>(
  (
    {
      leftButtonText,
      rightButtonText,
      isToggled,
      onToggle,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-11 min-w-[200px] max-w-xl rounded-full border border-white/20 backdrop-blur-md p-1 font-medium turn-bg-gradient', // Use your gradient class
          className
        )}
        {...rest}
      >
        <div className="relative flex h-full w-full">
          <div
            className={cn(
              ' bg-white/20 absolute inset-0 m-[1px] w-1/2 rounded-full transition-transform duration-300 ease-in-out',
              {
                'translate-x-0': !isToggled,
                'translate-x-full': isToggled,
              }
            )}
          />
          <button
            className={cn(
              'nav-link-shadow relative z-10 w-1/2 flex-1 px-4 text-center transition-colors duration-300',
              {
                'text-white': !isToggled,
                'text-gray-300': isToggled,
              }
            )}
            onClick={() => onToggle(false)}
          >
            {leftButtonText}
          </button>
          <button
            className={cn(
              'nav-link-shadow relative z-10 w-1/2 flex-1 px-4 text-center transition-colors duration-300',
              {
                'text-white': isToggled,
                'text-gray-300': !isToggled,
              }
            )}
            onClick={() => onToggle(true)}
          >
            {rightButtonText}
          </button>
        </div>
      </div>
    );
  }
);

ToggleSwitch.displayName = 'ToggleSwitch';
