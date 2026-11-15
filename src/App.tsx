
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

// MAIN PAGES
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";
import About from "./pages/About";
import Research from "./pages/Research";

// KNOWLEDGE
import Knowledge from "./pages/Knowledge";
import KnowledgeArticle from "./pages/KnowledgeArticle";

// RESEARCH
import CTI001Page from "./pages/CTI001Page";

// INTERACTIVE LABS
import Labs from "./pages/Labs";
import SteganographyLab from "./pages/SteganographyLab";

// GLOBAL STYLES
import "./styles/global.css";

export default function App() {
  return (
    <HashRouter>
      <div className="site-container">
        <Navbar />

        <main>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* BLOG */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* PROJECTS */}
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:slug"
              element={<ProjectDetail />}
            />

            {/* NOTES */}
            <Route path="/notes" element={<Notes />} />
            <Route
              path="/notes/:slug"
              element={<NoteDetail />}
            />

            {/* KNOWLEDGE */}
            <Route
              path="/knowledge"
              element={<Knowledge />}
            />
            <Route
              path="/knowledge/:slug"
              element={<KnowledgeArticle />}
            />

            {/* RESEARCH */}
            <Route
              path="/research"
              element={<Research />}
            />
            <Route
              path="/research/cti-001"
              element={<CTI001Page />}
            />

            {/* INTERACTIVE LABS */}
            <Route
              path="/labs"
              element={<Labs />}
            />
            <Route
              path="/labs/steganography"
              element={<SteganographyLab />}
            />

            {/* ABOUT */}
            <Route path="/about" element={<About />} />

            {/* FALLBACK */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        <footer>
          © {new Date().getFullYear()} llohs
        </footer>
      </div>
    </HashRouter>
  );
}
