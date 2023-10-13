import About from '@/sections/About';
import Explore from '@/sections/Explore';
import GetStarted from '@/sections/GetStarted';
import Hero from '@/sections/Hero';
import WhatIsNew from '@/sections/WhatIsNew';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatIsNew />
    </main>
  );
}
