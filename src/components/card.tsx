import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card as MaterialCard,
  CardHeader,
  CardContent,
  Avatar,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { LocationCity, ChevronRight } from "@mui/icons-material";

import type { FC } from "react";
import { User } from "../slice";
import { handleAvatar } from "../utils/handleStrings";
import Map from "./map";

const Card: FC<User> = ({
  id,
  name,
  email,
  address: {
    city,
    street,
    geo: { lat, lng },
  },
}) => {
  return (
    <MaterialCard>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {handleAvatar(name)}
          </Avatar>
        }
        title={name}
        subheader={email}
      />
      <CardMedia style={{ height: 200 }}>
        <Map
          location={[parseFloat(lat), parseFloat(lng)]}
          markers={[
            { position: [parseFloat(lat), parseFloat(lng)], popup: name },
          ]}
          zoom={2}
        />
      </CardMedia>
      <CardContent>
        <List disablePadding>
          <ListItem
            disablePadding
            secondaryAction={
              <Link to={`/${id}`}>
                <IconButton edge="end" aria-label="delete">
                  <ChevronRight />
                </IconButton>
              </Link>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <LocationCity />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={city} secondary={street} />
          </ListItem>
        </List>
      </CardContent>
    </MaterialCard>
  );
};

export default Card;
