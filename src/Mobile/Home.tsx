import image from "../assets/IMG(57).jpg";
import { Button, Typography } from "@mui/material";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function Home({ tabChange }: { tabChange: (arg0: number) => void }) {
  const weddingDate = new Date(2025, 7, 2);

  return (
    <>
      <div
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <div style={{ paddingTop: "5px", paddingBottom: "500px" }}>
          <div
            style={{
              margin: "40px",
              padding: "10px",
              borderRadius: "15px",
              background: "#ffffffBB",
            }}
          >
            <FlipClockCountdown
              style={{ justifyContent: "center" }}
              renderMap={[true, true, true, false]}
              to={weddingDate}
              digitBlockStyle={{
                width: 26,
                height: 40,
                fontSize: 20,
                background: "#ffffff",
                color: "black",
              }}
            />
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "28px",
                }}
              >
                02.08.2025
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                style={{
                  backgroundColor: "#5c7d74",
                  marginLeft: "20px",
                  padding: "0 0 0 0",
                  boxShadow: "none",
                  marginTop: "6px",
                  marginBottom: "6px",
                }}
                onClick={() => tabChange(4)}
              >
                RSVP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
