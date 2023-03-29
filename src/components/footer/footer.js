import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const contributors = [
  { name: "Lee Dillon", link: "https://github.com/LeeDillon" },
  { name: "Murtaza Mohebi", link: "https://github.com/Murtaza34" },
  { name: "Axel Jamal", link: "https://github.com/axeljamal" },
  { name: "Helder Balbino", link: "https://github.com/HelderBalbino" },
];

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          {contributors.map((contributor, index) => (
            <Typography key={index} mr={3} variant="caption" color="initial">
              <a target="_blank" rel="noopener noreferrer" href={contributor.link}>
                {contributor.name}
              </a>
            </Typography>
          ))}

          <Typography variant="caption" color="initial">
            Copyright ©2023.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
