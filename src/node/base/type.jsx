import React from "react";

const styles = {
  position: "relative",
  margin: "0.5rem",
  fontFamily: "Open Sans",
  fontSize: "0.8rem",
  fontWeight: 200,
};

function capitalize(str) {
  return str
    .split("-")
    .map(
      (word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
    )
    .join(" ");
}

export default function Type({ type }) {
  return <div style={styles}>{capitalize(type)}</div>;
}
