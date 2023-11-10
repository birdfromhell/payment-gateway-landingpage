import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../component/home";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
      <Wrapper>
        <SEO pageTitle={"Hopay - Payment Gateway"} />
        <HomeTwo />
      </Wrapper>
  );
};

export default index;
