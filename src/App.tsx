import "./App.css";
import { Promise } from "./components/Promise";
import { Services } from "./components/Services";
import { Story } from "./components/Story";
import { TopSection } from "./components/TopSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <TopSection />
      <Services />
      <Promise />
      <Story />
      <Footer />
    </main>
  );
}

export default App;
