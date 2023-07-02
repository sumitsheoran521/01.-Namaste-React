import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { key: 1 }, "Heading 1");
const heading2 = React.createElement("h2", { key: 2 }, "Heading 2");
const container = React.createElement("div", { key: 3, id:"container"}, [heading1, heading2]);
const root = document.getElementById("root");
const rootRender = ReactDOM.createRoot(root);
rootRender.render(container);
