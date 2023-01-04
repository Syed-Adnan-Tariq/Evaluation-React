import React from "react";

export default function Counter(props) {
  const styleObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  };
  const box = {
    padding: "50px",
    border: "1px solid black",
  };
  const leftbox = {
    padding: "10px",
    border: "1px solid black",
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "20px",
  };
  const rightbox = {
    padding: "10px",
    border: "1px solid black",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "20px",
  };
  const relative = {
    position: "relative",
  };
  const left = {
    marginLeft: "10px",
    width: "200px",
  };
  return (
    <>
      <div style={styleObj}>
        <div style={relative}>
          <div style={box}>{props.value}</div>
          <button style={leftbox} onClick={() => props.func(props.value + 1)}>
            +
          </button>
          <button style={rightbox} onClick={() => props.func(props.value - 1)}>
            -
          </button>
        </div>
        <div style={left}>Counter Component</div>
      </div>
    </>
  );
}
