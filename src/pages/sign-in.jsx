import React from "react";
import SEO from "../common/seo";
import SignIn from "../component/sign-in";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Hopay | Payment Gateway"} />
      <SignIn />
    </Wrapper>
  );
};

export default index;
