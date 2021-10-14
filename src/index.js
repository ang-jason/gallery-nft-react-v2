import * as React from "react";
import * as ReactDOM from "react-dom";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { ApplyJob } from "./pages/apply-job";

ReactDOM.render(
  <AuthProvider>
    <ApplyJob />
  </AuthProvider>,
  document.querySelector("#root")
);
