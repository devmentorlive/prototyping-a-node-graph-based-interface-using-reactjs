import React from "react";

const styles = {
  position: "absolute",
  top: "-31px",
  left: `${(260 - 60) / 2}px`,
  width: "60px",
};

export default function Icon({ type }) {
  return (
    <img
      style={styles}
      src={`/images/icons/${type}.png`}
      alt={`${type} node icon`}
    />
  );
}
