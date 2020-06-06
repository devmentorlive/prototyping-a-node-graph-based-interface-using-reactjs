import React from "react";
import Node from "../base";

export default function HasTag({ tag, completed }) {
  return <Node type="has-tag" title={tag} completed={completed} />;
}
