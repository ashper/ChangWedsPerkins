import { useTranslation } from "react-i18next";
import UK from "../assets/united-kingdom.png";
import Taiwan from "../assets/taiwan.png";

const languages: Record<string, { nativeName: string; flag: string }> = {
  en: { nativeName: "EN", flag: UK },
  zh: { nativeName: "中文", flag: Taiwan },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div>
      {Object.keys(languages).map((lng) => (
        <span
          key={lng}
          style={{
            cursor: "pointer",
            padding: "5px",
          }}
          onClick={() => {
            console.log(lng);
            i18n.changeLanguage(lng);
          }}
        >
          <img
            style={{
              width: i18n.resolvedLanguage === lng ? "38px" : "32px",
              verticalAlign: "middle",
            }}
            src={languages[lng].flag}
          ></img>
        </span>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
