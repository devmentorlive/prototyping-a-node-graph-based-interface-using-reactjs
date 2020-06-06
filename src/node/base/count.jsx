import React from "react";

const styles = {
  position: "relative",
  width: "100%",
  backgroundColor: "lightgrey",
  textAlign: "center",
  padding: "1rem",
  boxSizing: "border-box",
};

export default function Count({ completed }) {
  return (
    <div style={styles}>
      <div
        style={{
          fontFamily: "Open Sans",
          fontSize: "0.9rem",
          fontWeight: 200,
          textTransform: "uppercase",
        }}
      >
        completed
      </div>
      <div
        style={{
          fontFamily: "Inconsolata",
          fontSize: "0.8rem",
          fontWeight: 400,
        }}
      >
        {completed} subscribers
      </div>
    </div>
  );
}
