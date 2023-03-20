import React from "react";
import { Provider } from "jotai";
import AppController from "./AppController";

const App = () => {
  return (
    <Provider>
      <AppController/>
    </Provider>
  );
};

export default App;