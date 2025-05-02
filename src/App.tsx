import "./App.css";
import { Promise } from "./components/Promise";
import { Services } from "./components/Services";
import { Story } from "./components/Story";
import { TopSection } from "./components/TopSection";

function App() {
  return (
    <main>
      <TopSection />
      <Services />
      <Promise />
      <Story />
    </main>
  );
}

export default App;
