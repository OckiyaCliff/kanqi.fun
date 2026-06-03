import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import WatchPage from "./components/pages/WatchPage";
import GamesPage from "./components/pages/GamesPage";
import CareersPage from "./components/pages/CareersPage";
import StudioPage from "./components/pages/StudioPage";
import PressPage from "./components/pages/PressPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
