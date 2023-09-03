import "./App.css";
import { Card, ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Form from "./components/Form";
import React from "react";
import theme from "./components/Theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <center id="centerapp">
          <div id="spacing"></div>
            <Form />

            <div id="spacing-bottom"></div>
        </center>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
