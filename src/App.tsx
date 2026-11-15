
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";
import About from "./pages/About";
import Research from "./pages/Research";

import Knowledge from "./pages/Knowledge";
import KnowledgeArticle from "./pages/KnowledgeArticle";

// LLOHS LABS / Research
import CTI001Page from "./pages/CTI001Page";

import "./styles/global.css";

// Configuração automática de rotas
// GitHub Pages: /llohs-labs/
// Localhost: /

const basename = import.meta.env.PROD
  ? "/llohs-labs"
  : "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="site-container">
        <Navbar />

        <main>
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* BLOG */}
            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route
              path="/blog/:slug"
              element={<BlogPost />}
            />

            {/* PROJECTS */}
            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/projects/:slug"
              element={<ProjectDetail />}
            />

            {/* NOTES */}
            <Route
              path="/notes"
              element={<Notes />}
            />

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

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* FALLBACK */}
            <Route
              path="*"
              element={<Home />}
            />
          </Routes>
        </main>

        <footer>
          © {new Date().getFullYear()} llohs
        </footer>
      </div>
    </BrowserRouter>
  );
}
