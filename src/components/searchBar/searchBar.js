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
          <MenuItem value={1}>Arsenal</MenuItem>
          <MenuItem value={2}>Aston Villa</MenuItem>
          <MenuItem value={3}>Bournemouth</MenuItem>
          <MenuItem value={4}>Brentford</MenuItem>
          <MenuItem value={5}>Brighton</MenuItem>
          <MenuItem value={6}>Chelsea</MenuItem>
          <MenuItem value={7}>Crystal Palace</MenuItem>
          <MenuItem value={8}>Everton</MenuItem>
          <MenuItem value={9}>Fulham</MenuItem>
          <MenuItem value={10}>Leeds</MenuItem>
          <MenuItem value={11}>Leicester</MenuItem>
          <MenuItem value={12}>Liverpool</MenuItem>
          <MenuItem value={13}>Man City</MenuItem>
          <MenuItem value={14}>Man United</MenuItem>
          <MenuItem value={15}>Newcastle</MenuItem>
          <MenuItem value={16}>Nottingham Forest</MenuItem>
          <MenuItem value={17}>Southampton</MenuItem>
          <MenuItem value={18}>Tottenham</MenuItem>
          <MenuItem value={19}>West Ham</MenuItem>
          <MenuItem value={20}>Wolves</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
