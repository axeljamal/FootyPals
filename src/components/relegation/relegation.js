import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const Relegation = () => {
  return (
    <>
      <Grid display="flex" justifyContent={"end"} gap={4} mb={3}>
        <Grid item xs={0}>
          <Box display="flex" alignItems="center">
            <Box width={20} height={10} borderRadius={2} bgcolor="#38b000" mr={1} />
            <Typography variant="body1">Champions League</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" alignItems="center">
            <Box width={20} height={10} borderRadius={2} bgcolor="#5fa8d3" mr={1} />
            <Typography variant="body1">Europa League</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" alignItems="center">
            <Box width={20} height={10} borderRadius={2} bgcolor="#d00000" mr={1} />
            <Typography variant="body1">Relegation</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Relegation;
