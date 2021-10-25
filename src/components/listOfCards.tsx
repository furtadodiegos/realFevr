import React from "react";
import { Grid } from "@mui/material";

import type { FC } from "react";

import Card from "./card";
import Map from "./map";
import { User } from "../slice";

const ListOfCards: FC<{ users: User[] }> = ({ users }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={7} style={{ padding: "30px 0 0 30px" }}>
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={6} key={user.id}>
              <Card {...user} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Map
          location={[
            parseFloat(users[0].address.geo.lat),
            parseFloat(users[0].address.geo.lng),
          ]}
          markers={users.map(
            ({
              name,
              address: {
                geo: { lat, lng },
              },
            }) => ({
              position: [parseFloat(lat), parseFloat(lng)],
              popup: name,
            })
          )}
          zoom={2}
        />
      </Grid>
    </Grid>
  );
};

export default ListOfCards;
