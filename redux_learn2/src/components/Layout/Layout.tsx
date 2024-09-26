import React, { ReactNode } from "react";
import MainHeader from "./MainHeader";

interface propValidation {
  children: ReactNode;
}

const Layout: React.FC<propValidation> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
