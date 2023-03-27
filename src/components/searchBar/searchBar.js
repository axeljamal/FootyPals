import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
  { label: "Chelsea" },
  { label: "Man City" },
  { label: "Man United" },
  { label: "Tottenham" },
  { label: "Newcastle" },
  { label: "Liverpool" },
  { label: "Brighton" },
  { label: "Brentford" },
  { label: "Fulham" },
  { label: "Aston Villa" },
  { label: "Crystal Palace" },
  { label: "Wolves" },
  { label: "Leeds" },
  { label: "Everton" },
  { label: "Nottingham Forest" },
  { label: "Leicester" },
  { label: "West Ham" },
  { label: "Bournemouth" },
  { label: "Southampton" },
];
