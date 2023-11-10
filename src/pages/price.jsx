import React from "react";
import SEO from "../common/seo";
import Price from "../component/price";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <Price />
    </Wrapper>
  );
};

export default index;
