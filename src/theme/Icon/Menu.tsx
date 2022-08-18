import React from "react";
import { Props } from "@theme/Icon/Menu";
import { MenuAlt1Icon } from "@heroicons/react/outline";

export default function IconMenu({
  width = 20,
  height = 20,
  ...restProps
}: Props) {
  return (
    <MenuAlt1Icon
      width={width}
      height={height}
      aria-hidden="true"
      {...restProps}
    />
  );
}
