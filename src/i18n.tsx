import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          TravelDetails: {
            p1: "We are getting married at the lovely Claudine restaurant in Dempsey.",
            p2: "Driving: Claudine, 39C Harding Road, Singapore, 249541 (ample parking)",
            p3: "MRT: Napier TE12 (15 minute walk)",
            p4: "Bus: Bef Tyersall Ave (5 minute walk)",
          },
        },
      },
      zh: {
        translation: {
          TravelDetails: {
            p1: "我们将在登布西 (Dempsey) 迷人的Claudine餐厅举行婚礼",
            p2: "驾车前往: Claudine 餐厅, 新加坡哈丁路39C号, 邮编249541 (停车位充足)",
            p3: "地铁: Napier 站 TE12 (步行约15分钟)",
            p4: "公交车: Tyersall Ave 站 (Bef Tyersall Ave) (步行约5分钟)",
          },
        },
      },
    },
  });

export default i18n;
