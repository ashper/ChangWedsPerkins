import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";

interface MapProps {
  width?: string;
  height?: string;
}

export function Map({ width = "100%", height = "400px" }: MapProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.8077461590641!2d103.81319686717659!3d1.3048336286222277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da193420e53bfb%3A0xc828523761e16842!2sClaudine%20Restaurant!5e0!3m2!1sen!2ssg!4v1737779302096!5m2!1sen!2ssg";

  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading && (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {hasError ? (
        <Box sx={{ textAlign: "center", p: 2 }}>
          Unable to load map. Please try again later.
        </Box>
      ) : (
        <iframe
          title="Claudine Restaurant Location"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </Box>
  );
}
