import "./App.css";
import { Promise } from "./components/Promise";
import { Services } from "./components/Services";
import { TeamMembers } from "./components/TeamMembers";
import { TopSection } from "./components/TopSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <TopSection />
      <Services />
      <Promise />
      <TeamMembers />
      <Footer />
    </main>
  );
}

export default App;
