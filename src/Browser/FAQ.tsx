import { useTranslation } from "react-i18next";
import FAQS from "../Shared/FAQs";

function FAQ() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("FAQ.Title")}</h2>
      <FAQS></FAQS>
    </>
  );
}

export default FAQ;
