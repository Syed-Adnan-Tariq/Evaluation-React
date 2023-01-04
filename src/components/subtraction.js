import React from "react";

export default function Subtraction() {
  const styleObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px"
  };
  const box = {
    padding: "50px",
    border: "1px solid black",
  };
  const smallbox = {
    padding: "10px",
    border: "1px solid black",
    position: "absolute",
    bottom: "0",
    right: "0",
  };
  const relative = {
    position: "relative",
  };
  const left = {
    marginLeft: "10px",
    width: "200px"
  };
  const val = 4;
  return (
    <div style={styleObj}>
      <div style={relative}>
        <div style={box}>{val}</div>
        <div style={smallbox}>
          {typeof localStorage.getItem("counter") != undefined
            ? val - localStorage.getItem("counter")
            : val}
        </div>
      </div>
      <div style={left}>Subtraction Component</div>
    </div>
  );
}
