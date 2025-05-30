import FAQS from "../Shared/FAQs";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{t("FAQ.Title")}</h2>
      <FAQS></FAQS>
    </>
  );
}

export default FAQ;
