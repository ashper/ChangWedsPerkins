import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Shared/LanguageSwitcher";
import "./Heading.css";

function Heading() {
  const { t } = useTranslation();
  const one_day = 1000 * 60 * 60 * 24;
  const now = new Date();
  const weddingDay = new Date("2025-08-02");
  const days = Math.round((weddingDay.getTime() - now.getTime()) / one_day);
  return (
    <>
      <div className="heading">{t("Heading.Title")}</div>
      <div className="paragraph">
        {t("Heading.p1")} | {t("Heading.p2")} |{" "}
        {t("Heading.p3").replace("NN", `${days}`)}
      </div>
      <div style={{ position: "absolute", top: "0px", right: "0px" }}>
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </>
  );
}

export default Heading;
