// src/types/react-qr-code.d.ts
declare module "react-qr-code" {
  import * as React from "react";

  export interface QRCodeProps extends React.SVGProps<SVGSVGElement> {
    value: string;
    size?: number; // defaults to 128
    bgColor?: string; // defaults to '#FFFFFF'
    fgColor?: string; // defaults to '#000000'
    level?: "L" | "M" | "H" | "Q"; // defaults to 'L'
  }

  class QRCode extends React.Component<QRCodeProps, never> {
    // Use 'never' to indicate no state
    render(): JSX.Element;
  }

  export default QRCode;
}
