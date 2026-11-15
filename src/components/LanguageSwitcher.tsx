
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "pt" | "en") => {
    i18n.changeLanguage(language);
    localStorage.setItem("llohs-language", language);
  };

  return (
    <div className="language-switcher">
      <button
        type="button"
        className={i18n.language === "pt" ? "selected" : ""}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </button>

      <span>/</span>

      <button
        type="button"
        className={i18n.language === "en" ? "selected" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
