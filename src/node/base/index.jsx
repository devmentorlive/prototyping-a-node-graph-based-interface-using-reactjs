import React from "react";

import Icon from "./icon";
import Type from "./type";
import Title from "./title";
import Count from "./count";

const size = 260;
const styles = {
  position: "relative",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  width: `${size}px`,
  margin: "3rem",
  boxSizing: "border-box",
};

export default function Node({ type, title, completed }) {
  return (
    <div style={styles}>
      <Icon type={type} nodeSize={size} />
      <Type type={type} />
      <Title title={title} />
      <Count completed={completed} />
    </div>
  );
}
