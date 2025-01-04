const heading = React.createElement(
  "div",
  { className: "farman" },
  React.createElement("h1", { className: "headings" }, "Hello world")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
