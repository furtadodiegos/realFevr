import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Grid,
} from "@mui/material";
import { TwitterShareButton, TwitterIcon } from "react-share";

import type { FC } from "react";

import useDetails from "../hooks/useDetails";
import MapContainer from "../components/map";
import SEO from "../components/seo";

const Details: FC = () => {
  const { info, position, username } = useDetails();
  const [socialBanner, setsocialBanner] = useState("");

  return (
    <div>
      <SEO
        description={`This page contain all information about ${username}`}
        title={`${username} information page`}
        author={username}
        socialBanner={socialBanner}
      />

      <div style={{ height: 300 }}>
        <MapContainer
          location={position}
          markers={[{ position, popup: username || "" }]}
          zoom={8}
          setBanner={setsocialBanner}
        />
      </div>

      <Box style={{ margin: 20 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" color="text.primary">
              {username}
            </Typography>
          </Grid>

          <Grid item>
            <TwitterShareButton url={window.location.href} title={username}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </Grid>
        </Grid>

        <Divider />

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          spacing={4}
        >
          {info.map(({ subheader, data }) => (
            <Grid item key={subheader}>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    {subheader}
                  </ListSubheader>
                }
              >
                {data.map(({ primary, secondary }) => (
                  <ListItem key={primary}>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Details;
