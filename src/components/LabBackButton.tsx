
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/LabBackButton.css";

export default function LabBackButton() {
  const { i18n } = useTranslation();

  const isEnglish = i18n.resolvedLanguage === "en";

  return (
    <Link to="/labs" className="lab-back-button">
      <span className="lab-back-arrow" aria-hidden="true">
        ←
      </span>

      <span>
        {isEnglish ? "Back to Labs" : "Voltar aos Labs"}
      </span>
    </Link>
  );
}
