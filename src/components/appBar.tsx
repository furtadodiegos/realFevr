import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar as MaterialAppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { PinDrop } from "@mui/icons-material";

import type { FC } from "react";

const AppBar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MaterialAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PinDrop />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RealFevr
            </Typography>
          </Link>
        </Toolbar>
      </MaterialAppBar>
    </Box>
  );
};

export default AppBar;
