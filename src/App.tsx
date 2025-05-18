import { useRef } from "react";
import "./App.css";
import { Promise } from "./components/Promise";
import { Services } from "./components/Services";
import { TeamMembers } from "./components/TeamMembers";
import { TopSection } from "./components/TopSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

function App() {
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
