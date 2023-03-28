import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [team, setTeam] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value);
  };

  return (
    <Box sx={{ Width: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select your team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="Select your team"
          onChange={handleChange}
        >
          <MenuItem value={42}>Arsenal</MenuItem>
          <MenuItem value={66}>Aston Villa</MenuItem>
          <MenuItem value={35}>Bournemouth</MenuItem>
          <MenuItem value={55}>Brentford</MenuItem>
          <MenuItem value={51}>Brighton</MenuItem>
          <MenuItem value={49}>Chelsea</MenuItem>
          <MenuItem value={52}>Crystal Palace</MenuItem>
          <MenuItem value={45}>Everton</MenuItem>
          <MenuItem value={36}>Fulham</MenuItem>
          <MenuItem value={63}>Leeds</MenuItem>
          <MenuItem value={46}>Leicester</MenuItem>
          <MenuItem value={40}>Liverpool</MenuItem>
          <MenuItem value={50}>Man City</MenuItem>
          <MenuItem value={33}>Man United</MenuItem>
          <MenuItem value={34}>Newcastle</MenuItem>
          <MenuItem value={65}>Nottingham Forest</MenuItem>
          <MenuItem value={41}>Southampton</MenuItem>
          <MenuItem value={47}>Tottenham</MenuItem>
          <MenuItem value={48}>West Ham</MenuItem>
          <MenuItem value={39}>Wolves</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
