import "./App.css";
import { useEffect, useState } from "react";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

import { Promise } from "./components/Promise";
import { Services } from "./components/Services";
import { TeamMembers } from "./components/TeamMembers";
import { TopSection } from "./components/TopSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsAppReady(true);
    });
  }, []);

  if (!isAppReady) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Bouncy size="45" speed="1.75" color="black" />
      </div>
    );
  }

  return (
    <>
      <BackToTop />
      <main className="overflow-x-hidden">
        <section id="top">
          <TopSection />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="promise">
          <Promise />
        </section>

        <section id="team-members">
          <TeamMembers />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
