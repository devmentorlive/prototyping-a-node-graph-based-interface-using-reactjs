import React from "react";

const styles = {
  position: "relative",
  width: "100%",
  textAlign: "center",
  boxSizing: "border-box",
  margin: "1.5rem 0 1rem",
  fontWeight: 200,
};

export default function Title({ title }) {
  return <div style={styles}>{title}</div>;
}
