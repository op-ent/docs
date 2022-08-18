import React from "react";
import { Props } from "@theme/Root";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";

export default function Root({ children }: Props) {
  return <>{children}</>;
}
