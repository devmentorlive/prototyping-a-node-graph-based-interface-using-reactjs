import React from "react";

const styles = {
  position: "relative",
  width: "100%",
  backgroundColor: "lightgrey",
  textAlign: "center",
  padding: "1rem",
  boxSizing: "border-box",
};

export default function Bottom({ completed }) {
  return (
    <div style={styles}>
      <div
        style={{
          fontWeight: 300,
          fontSize: "0.9rem",
          textTransform: "uppercase",
        }}
      >
        completed
      </div>
      <div
        style={{
          fontWeight: 200,
          fontSize: "0.8rem",
        }}
      >
        {completed} subscribers
      </div>
    </div>
  );
}
