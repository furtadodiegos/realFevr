import React from "react";
import { Skeleton as MaterialSkeleton, Grid } from "@mui/material";

import type { FC } from "react";

const Skeleton: FC = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <MaterialSkeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        </Grid>

        <Grid item xs={5}>
          <MaterialSkeleton animation="wave" variant="text" width="80%" />
          <MaterialSkeleton animation="wave" variant="text" />
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: 10 }}>
        <MaterialSkeleton variant="rectangular" width={210} height={118} />
      </Grid>
    </Grid>
  );
};

export default Skeleton;
