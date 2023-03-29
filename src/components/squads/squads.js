import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Squads = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/players/squads",
      params: { team: `${props.team}` },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_FOOTBALL_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response[0].players);
        setData(response.data.response[0].players);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [props.team]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            {/* <TableCell>Age</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left">
                <img src={item.photo} width={30} alt="logo" />{" "}
              </TableCell>
              <TableCell align="left">{item.number}</TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.position}</TableCell>
              {/* <TableCell align="left">{item.age}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Squads;
