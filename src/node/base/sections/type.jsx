import React from "react";

const styles = {
  position: "relative",
  margin: "0.5rem",
  fontWeight: 200,
};

export default function Type({ type }) {
  return <div style={styles}>{type}</div>;
}
