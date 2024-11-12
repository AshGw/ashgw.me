'use client';

import { Button } from '@/app/components/ui/button';
import useToggleDropDownMenu from '@/lib/hooks/useToggleDropDownMenu';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Logo } from './Logo';
import { LeftNav } from './desktop/LeftNav';
import { RightNav } from './desktop/RightNav';
import { HamburgerButton } from './mobile/Hamburger';
import { NavElement } from './mobile/NavElement';

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
        {isOverlayVisible && <BackgroundOverlay onClick={handleToggleMenu} />}
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
          {isOpened && <DropDownNav toggleMenu={handleToggleMenu} />}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export function DropDownNav({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="absolute rounded-3xl z-50 backdrop-blur-2xl w-full space-y-3 px-5 pb-3 pt-2"
    >
      <NavElement href="/" name="Home" onToggleMenu={toggleMenu} />
      {/* <SmallNavLink href="/services" name="Services" toggleMenu={toggleMenu} /> */}
      <NavElement href="/blog" name="Blog" onToggleMenu={toggleMenu} />
      <NavElement href="/about" name="About" onToggleMenu={toggleMenu} />
      <div className="glowsup">
        <Link href="/contact">
          <Button className="w-full" variant={'navbar'} onClick={toggleMenu}>
            Contact
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

function BackgroundOverlay({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 z-40 bg-black sm:hidden"
      onClick={onClick}
    />
  );
}
