import * as React from "react";
import * as ReactDOM from "react-dom";

const target = document.querySelector("#root");

export function showNow() {
  const now = new Date().toLocaleTimeString();

  const el = (
    <small>
      Now is <span className="font-bold">{now}</span>
    </small>
  );

  ReactDOM.render(el, target);
}
