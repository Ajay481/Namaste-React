import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement- JS Object => HTMLElement(render)

//This is how can create React element using React
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX => HTML-like or XML-like syntax but not HTML or XML in Javascript

//This is how can create React element using JSX
//JSX (transpiled before it reaches the JS engine) - PARCEL - Babel
//JSX => Babel transpile it to React.createElement => ReactElement- JS Object => HTMLElement(render)
const heading = <h1 id="heading">Namaste React using JSX</h1>;
const Heading = () => <h2 id="heading">Namaste React using JSX</h2>;

// React Component
// 1. Class Based Component - OLD
// 2. Functional Component - NEW

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <Heading />
      <Heading></Heading>
      {Heading()}
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(<HeadingComponent />);
root2.render(<Heading />);
