
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { key: "home", path: "/" },
  { key: "blog", path: "/blog" },
  { key: "projects", path: "/projects" },
  { key: "research", path: "/research" },
  { key: "labs", path: "/labs/steganography" },
  { key: "knowledge", path: "/knowledge" },
  { key: "notes", path: "/notes" },
  { key: "about", path: "/about" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <header className="navbar-container">
      <nav
        className="navbar"
        aria-label="Main navigation"
      >
        {links.map(({ key, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            {key === "knowledge"
              ? i18n.resolvedLanguage === "en"
                ? "knowledge"
                : "conhecimento"
              : key === "labs"
                ? "labs"
                : key === "research"
                  ? t("nav.research", {
                      defaultValue: "research",
                    })
                  : t(`nav.${key}`)}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-language">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
