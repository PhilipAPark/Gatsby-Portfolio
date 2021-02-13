import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";
import Footer from "../Footer";
import App from "../App";

const MainContentWrapper = styled.main`
  padding: 0px 60px;
`;

function Page(props) {
  return (
    <App>
      <div>
        <Navigation />
        <MainContentWrapper>{props.children}</MainContentWrapper>
        <Footer />
      </div>
    </App>
  );
}

export default Page;
