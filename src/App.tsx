
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

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="site-container">
        <Navbar />

        <main>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Projects */}
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:slug"
              element={<ProjectDetail />}
            />

            {/* Notes */}
            <Route path="/notes" element={<Notes />} />
            <Route
              path="/notes/:slug"
              element={<NoteDetail />}
            />

            {/* Knowledge */}
            <Route
              path="/knowledge"
              element={<Knowledge />}
            />
            <Route
              path="/knowledge/:slug"
              element={<KnowledgeArticle />}
            />

            {/* Research / LLOHS LABS */}
            <Route
              path="/research"
              element={<Research />}
            />
            <Route
              path="/research/cti-001"
              element={<CTI001Page />}
            />

            {/* About */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer>
          © {new Date().getFullYear()} llohs
        </footer>
      </div>
    </BrowserRouter>
  );
}
