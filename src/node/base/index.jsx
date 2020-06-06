import React from "react";

import Icon from "./icon";
import TypeSection from "./sections/type";
import TitleSection from "./sections/title";
import BottomSection from "./sections/bottom";

const styles = {
  position: "relative",
  border: "1px solid lightgrey",
  borderRadius: "2px",
  width: "260px",
  margin: "3rem",
  boxSizing: "border-box",
};

export default function Node({ type, title, completed }) {
  return (
    <div style={styles}>
      <Icon type={type} />
      <TypeSection type={type} />
      <TitleSection title={title} />
      <BottomSection completed={completed} />
    </div>
  );
}
