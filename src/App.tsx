import React from "react";

import type { FC } from "react";

import AppBar from "./components/appBar";
import Routes from "./routes";

const App: FC = () => {
  return (
    <div>
      <AppBar />

      <Routes />
    </div>
  );
};

export default App;
