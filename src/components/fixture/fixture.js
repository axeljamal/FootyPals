import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
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

  const tableStyle = {
    borderSpacing: "0px 4px",
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.teams.id} sx={{tableStyle}}>
                <TableCell align="right">{item.teams.home.name}</TableCell>
                <TableCell align="left">
                  <img src={item.teams.home.logo} width={36} alt="logo" />{" "}
                </TableCell>
                <TableCell align="center">
                  {new Date(item.fixture.date).toLocaleString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                  })}
                </TableCell>
                <TableCell align="right">
                  <img src={item.teams.away.logo} width={30} alt="logo" />{" "}
                </TableCell>
                <TableCell align="left">{item.teams.away.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

