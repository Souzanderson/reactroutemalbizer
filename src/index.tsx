import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PageOneComponent } from "./pages/page1/pageone.component";
import { PageTwoComponent } from "./pages/page2/pagetwo.component";
import reportWebVitals from "./reportWebVitals";
import { RouterService, RouterStruct } from "./services/router/router.service";

const Router = RouterService.getInstance();

Router.routes = [
  { component: PageOneComponent, path: "" },
  { component: PageTwoComponent, path: "pagetwo" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterStruct />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
