import React from "react";
import ReactDOM from "react-dom/client";
import MainController from "./Controllers/MainController";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <MainController />
    </ChakraProvider>
  </React.StrictMode>,
);
