import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={footBallTeams}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const footBallTeams = [
  { label: 'Arsenal' },
  { label: 'Chelsea' },
  { label: 'Man City' },
  { label: 'Man United' },
];
