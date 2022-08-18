import React from "react";
import { XIcon } from "@heroicons/react/outline";

export default function IconClose({
  width = 21,
  height = 21,
  color = "currentColor",
  ...restProps
}) {
  return <XIcon width={width} height={height} {...restProps} />;
}
