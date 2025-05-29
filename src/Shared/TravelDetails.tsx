import { useTranslation } from "react-i18next";

export function TravelDetails() {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("TravelDetails.p1")}</p>
      <p>{t("TravelDetails.p2")}</p>
      <p>{t("TravelDetails.p3")}</p>
      <p>{t("TravelDetails.p4")}</p>
    </>
  );
}
