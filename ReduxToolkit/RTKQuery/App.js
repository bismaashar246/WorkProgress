import "./App.css";
import { Data } from "./Data";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./apiSlice";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <div className="App">
          <Data />
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
