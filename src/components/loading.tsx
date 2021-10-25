import React from "react";
import { Grid } from "@mui/material";

import type { FC } from "react";

import Skeleton from "./skeleton";

const Loading: FC = () => {
  return (
    <Grid container spacing={4} style={{ marginTop: 10 }}>
      {Array.from(Array(12)).map((_, index) => (
        <Grid item xs={4} key={index}>
          <Skeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default Loading;
