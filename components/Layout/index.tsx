import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Container, FullWidthContainer } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Platform Suite</title>
      </Head>

      {/* Have to make changes here accordingly */}
      <Container>
        <Sidebar />
        <FullWidthContainer>
          <Navbar />
          <main>{children}</main>
        </FullWidthContainer>
      </Container>
    </>
  );
};

export default Layout;

