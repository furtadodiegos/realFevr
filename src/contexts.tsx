import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import type { FC } from "react";

import store from "./store";

const Contexts: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default Contexts;
