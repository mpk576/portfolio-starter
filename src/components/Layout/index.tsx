import React, { ReactElement } from "react";

type LayoutProps = {
  children: any;
};

export default function index({ children }: LayoutProps): ReactElement {
  return <main className="layout">{children}</main>;
}
