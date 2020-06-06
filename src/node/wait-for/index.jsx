import React from "react";
import Node from "../base";

export default function WaitFor({ days, completed }) {
  return (
    <Node type="wait-for" title={`Wait ${days} days`} completed={completed} />
  );
}
