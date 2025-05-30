import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  SxProps,
  Theme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/add";
import { useTranslation } from "react-i18next";

function FAQS() {
  const { t } = useTranslation();
  const props: SxProps<Theme> = {
    bgcolor: "#f4ede7",
    border: "1px solid #5c7d74",
  };
  return (
    <>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.1.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.1.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.2.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.2.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.3.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.3.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.4.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.4.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.5.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.5.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.6.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.6.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.7.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.7.a")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={props}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">{t("FAQ.8.q")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{t("FAQ.8.a")}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default FAQS;
