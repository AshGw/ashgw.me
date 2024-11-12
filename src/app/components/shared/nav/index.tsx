'use client';

import useToggleDropDownMenu from '@/lib/hooks/useToggleDropDownMenu';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Logo } from './Logo';
import { LeftNav } from './desktop/LeftNav';
import { RightNav } from './desktop/RightNav';
import { BgOverlay } from './mobile/BgOverlay';
import { DropDownMenu } from './mobile/DropDownMenu';
import { HamburgerButton } from './mobile/Hamburger';

export function NavBar() {
  const [isOpened, toggleMenu] = useToggleDropDownMenu({
    menuId: 'nav-menu',
  });
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    if (isOpened) {
      setOverlayVisible(true);
    } else {
      setOverlayVisible(false);
    }
  }, [isOpened]);

  const handleToggleMenu = () => {
    toggleMenu();
  };

  return (
    <nav id="nav-menu" className="pt-3 relative">
      <AnimatePresence>
        {isOverlayVisible && <BgOverlay onClick={handleToggleMenu} />}
      </AnimatePresence>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            id="hamburger"
            className="absolute inset-y-0 left-2 flex items-center sm:hidden z-50"
          >
            <HamburgerButton isOpened={isOpened} onClick={handleToggleMenu} />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
            <LeftNav />
          </div>
          <div className="z-50">
            <RightNav />
          </div>
        </div>
      </div>
      <div className="mx-2 sm:hidden">
        <AnimatePresence>
          {isOpened && <DropDownMenu onToggleMenu={handleToggleMenu} />}
        </AnimatePresence>
      </div>
    </nav>
  );
}
