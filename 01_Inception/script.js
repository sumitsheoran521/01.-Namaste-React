const heading1 = React.createElement(
  "h1",
  { id: "title1", key: "title1" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title2", key: "title2" },
  "Heading 2"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = document.getElementById("root");

const rootRender = ReactDOM.createRoot(root);
// Passing a react element inside the root
rootRender.render(container);
// console.log(heading);
