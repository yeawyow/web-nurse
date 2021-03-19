import React from "react";
import Footer from "./components/fragments/Footer";
import Header from "./components/fragments/Header";
import Navbar from "./components/fragments/Navbar";
import Home from "./components/pages/Home";
import { green, orange } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
 const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#62CCC0",
      },
    },
    status: {
      danger: "orange",
    },
  });
export default function App() {
 

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}
