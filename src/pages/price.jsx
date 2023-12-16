import React from "react";
import SEO from "../common/seo";
import Price from "../component/price";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Hopay - Payment Gateway"} />
      <Price />
    </Wrapper>
  );
};

export default index;
