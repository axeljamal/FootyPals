import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={footBallTeams}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search a team" />}
    />
  );
}

const footBallTeams = [
  { label: "Arsenal" },
  { label: "Aston Villa" },
  { label: "Bournemouth" },
  { label: "Brentford" },
  { label: "Brighton" },
  { label: "Chelsea" },
  { label: "Crystal Palace" },
  { label: "Everton" },
  { label: "Fulham" },
  { label: "Leeds" },
  { label: "Leicester" },
  { label: "Liverpool" },
  { label: "Man City" },
  { label: "Man United" },
  { label: "Newcastle" },
  { label: "Nottingham Forest" },
  { label: "Southampton" },
  { label: "Tottenham" },
  { label: "West Ham" },
  { label: "Wolves" },
];
