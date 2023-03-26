import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

const teams = ["Arsenal", "Man City", "Liverpool", "Chelsea", "Man United"];

// const theme = createTheme({
//   palette: {
//     myBtn: {
//       main: "#f7ede2",
//     },
//   },
// });


const TeamsButtons = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2} mt={2}>
        {teams.map((team) => (
          <Button
            key={team}
            variant="contained"
            // color="myBtn"
            sx={{
              fontSize: "1.1rem",
              textTransform: "none",
              color: "#FAFAFA",
              borderRadius: "10px",
              border: "2px solid #FAFAFA",
              background: "#252525",
              boxShadow: "3px 3px #fafafa",
              cursor: "pointer",
              // transition: "transform 0.2s ease-in-out",
              "&:hover": {
                background: "#70d6ff",
                color: "#252525",
                transition: "transform 0.2s ease-in-out",
              },
              "&:active": {
                boxShadow: "none",
                transform: "translate(3px, 3px)",
                transition: "transform 0.2s ease-in-out",
              },
              "@media (max-width: 600px)": {
                fontSize: "1rem",
                lineHeight: "1rem",
              },
            }}
          >
            {team}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default TeamsButtons;