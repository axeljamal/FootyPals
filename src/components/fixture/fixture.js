import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fixture() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { league: "39", next: "50" },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_FOOTBALL_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);
        setData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            {/* <TableCell></TableCell>
            <TableCell></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.teams.id}>
              <TableCell align="left">{item.teams.home.name}</TableCell>
              <TableCell align="left">
                <img src={item.teams.home.logo} width={30} alt="logo" />{" "}
              </TableCell>
              <TableCell align="left">{item.fixture.date}</TableCell>
              <TableCell align="left">
                <img src={item.teams.away.logo} width={30} alt="logo" />{" "}
              </TableCell>
              <TableCell align="left">{item.teams.away.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
