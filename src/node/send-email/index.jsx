import React from "react";
import Node from "../base";

export default function SendEmail({ title, completed }) {
  return <Node type="send-email" title={title} completed={completed} />;
}
