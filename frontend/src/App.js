import './App.css';
import Main from "./main"
import { Provider } from "react-redux";
import store from "./store";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
