import React from "react";

export default function Icon({ type, nodeSize }) {
  const iconSize = 54;
  const styles = {
    position: "absolute",
    top: `-${iconSize / 2}px`,
    left: `${(nodeSize - iconSize) / 2}px`,
    width: `${iconSize}px`,
  };

  return (
    <img
      style={styles}
      src={require(`./icons/${type}-icon.png`)}
      alt={`${type} node icon`}
    />
  );
}
