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
        console.log(response.data.response[0]);
        setData(response.data.response[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [props.team]);

  return (
    <div>
      <div>
        {data?.map((item) => (
          <div key={item.players.id}>
            <img src={item.players.photo} alt="player" />
          </div>
        ))}
      </div>
      squads{props.team},{" "}
    </div>
  );
};

export default Squads;
