import React from "react";
import ReactDOM from "react-dom/client";

// Render Page using React
/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *    </div>
 * </div>
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, // Attributes
//   "Hello World By React!"
// );

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // Take this Object create h1 tag which browser understands and put that inside the root
