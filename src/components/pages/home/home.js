import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import backgroundImage from "../../../assets/bgImage.jpg";
import SearchBar from "../../searchBar/searchBar";

const Home = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "500",
            fontSize: { xs: "1.3rem", md: "3rem", lg: "3rem" },
          }}
        >
          Stay up-to-date with everything <br></br> Premier League in one place.
        </Typography>
      </Box>

      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <SearchBar />
      </Box>

      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
        `}
      </style>
    </>
  );
};

export default Home;
