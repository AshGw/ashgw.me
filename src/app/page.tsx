import { Fragment } from 'react';

import { HeroSection } from './components/pages/home/HeroSection';
import { Footer } from './components/shared/footer';

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <Footer />
    </Fragment>
  );
}
