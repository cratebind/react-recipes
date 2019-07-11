import * as React from "react";
import { Provider as ReakitProvider } from "reakit";
import { mergeSystem } from "reakit-system";
import * as bootstrapSystem from "reakit-system-bootstrap";
import * as playgroundSystem from "reakit-playground/system";

const system = mergeSystem(bootstrapSystem, playgroundSystem, {
  palette: {
    ...bootstrapSystem.palette,
    primary: "#e63f28",
    link: "#006DFF",
    secondary: "#504984"
  }
});

function Provider(props: { children: React.ReactNode }) {
  return (
    <ReakitProvider unstable_system={system}>{props.children}</ReakitProvider>
  );
}

export default Provider;
