const Transcript = (props) => {
  return React.createElement("div", {}, [
    React.createElement("span", {}, props.subcategory),
    React.createElement("span", {}, props.index),
    React.createElement("h3", {}, props.title),
  ]);
};

const App = () => {
  return React.createElement("h1", {}, [
    React.createElement(Transcript, {
      subcategory: "Season 1",
      index: "01",
      title: "Pilot",
    }),
    React.createElement(Transcript, {
      subcategory: "Season 1",
      index: "01",
      title: "Sweet Taste of Liberty",
    }),
    React.createElement(Transcript, {
      subcategory: "Season 1",
      index: "01",
      title: "Return of the Shirt",
    }),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
