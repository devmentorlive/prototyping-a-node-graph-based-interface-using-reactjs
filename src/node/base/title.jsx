import React from "react";

const styles = {
  position: "relative",
  width: "100%",
  textAlign: "center",
  boxSizing: "border-box",
  margin: "1rem 0 1.2rem",
  padding: "0 1.8rem",
  fontFamily: "Inconsolata",
  fontSize: "1.1rem",
  lineHeight: 1.2,
  fontWeight: 300,
};

export default function Title({ title }) {
  return <div style={styles}>{title}</div>;
}
