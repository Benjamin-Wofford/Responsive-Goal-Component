import React from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core";
import App from "./App";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
