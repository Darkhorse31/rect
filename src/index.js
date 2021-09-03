import React from "react";
import ReactDOM from "react-dom";
const gstyle = {
  color: ""
};
const date = new Date();
const curenttime = date.getHours();
console.log(curenttime);
let greetinng;
if (curenttime < 12) {
  greetinng = "Good morning";
  gstyle.color = "red";
} else if (curenttime < 18) {
  greetinng = "Good afternoon";
  gstyle.color = "green";
} else {
  greetinng = "Good night";
  gstyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={gstyle}>
    {greetinng}
  </h1>,
  document.getElementById("root")
);
