import "whatwg-fetch";
import React from "react";
import Provider from "./src/components/Provider";
import CoreLayout from "./src/components/CoreLayout";
import "./src/utils/bootstrap.css"

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;

export const wrapPageElement = ({ element, props }) => {
  return <CoreLayout {...props}>{element}</CoreLayout>;
};
