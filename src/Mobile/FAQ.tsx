import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/add";

function FAQ() {
  // const images = import.meta.glob(
  //   "../assets/OurStory/*.{png,jpg,jpeg,svg,JPG,PNG}",
  //   {
  //     eager: true,
  //   }
  // );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const imageList = Object.values(images).map((image: any) => (
  //   <img
  //     src={image.default}
  //     style={{ width: "100%", height: "100%" }}
  //     loading="lazy"
  //   />
  // ));

  return (
    <>
      <h2>Wedding FAQs</h2>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">What date should I rsvp by?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Please RSVP by June 30th Monday.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            Is there parking at the venue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There is free on-site parking at Claudine and in the surrounding
            vicinity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            Is your wedding indoors or outdoors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our reception and ceremony will be fully indoors and air-conditioned
            but the outdoor garden terrace will be open for welcome refreshments
            and light bites.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">What is your dress-code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While there are no color restrictions (except white, of course!),
            our dress-code is black tie optional. Please dress your best! While
            tuxedos and gowns are encouraged, suits and midi- or knee-length
            fancy cocktail dresses are also welcome.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            What is the wedding day itinerary?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Welcome canapés and bubbly at La Terrace will begin from 11 AM. We
            will also have a video phone book at guest registration and we would
            love for you to leave us a video message! Doors to the solemnisation
            area will be open then for guests to find a seat. Seats are not
            assigned for the ceremony aside from reserved seats for the bride
            and groom's parents. There will be assigned seating and a seating
            chart for the reception. Guests are requested to be seated by
            11.45AM as the ceremony will begin at 12PM sharp. Following that,
            guests will be ushered into the main dining hall at 1230PM for the
            lunch reception which is slated to conclude by 3PM.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            Can I take photos during the solemnization ceremony?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We kindly ask for your cooperation to keep our ceremony “unplugged”
            and refrain from using any mobile phones, cameras or recording
            devices. Our spectacular photographers and videographers will
            capture every moment and it is important they do not be obstructed
            by screens or movements in the aisle. We’d love for our guests to be
            fully present with us during these special moments. Guests are
            welcome to photograph freely during the reception and at all other
            points of the day!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            Are plus-ones and children allowed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please check the wedding invitation for the names of all invited
            guests. As our wedding is an intimate and cozy event, we will not be
            accommodating additional guests unless clearly stated on the invite!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            What type of food/alcohol will you be serving at the reception?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#f4ede7",
        }}
      >
        <AccordionSummary expandIcon={<AddIcon />}>
          <Typography component="span">
            Will you have a wedding gift registry?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            We will not have a traditional gift registry and your presence is
            our greatest gift of all! In lieu of gifts, we will have a cash
            registry box that will be available at the guest registration table
            if you wish to bless us with a cash gift. For any questions or
            concerns, please feel free to contact us at
            changwedsperkins@gmail.com!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default FAQ;
