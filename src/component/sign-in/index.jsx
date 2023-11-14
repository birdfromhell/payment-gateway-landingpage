import FooterFive from "@/layout/footers/footers-2";
import HeaderTwo from "@/layout/headers/header-2";
import React from "react";
import SingnInArea from "./singn-in-area";

const SignIn = () => {
  return (
    <>
      <HeaderTwo />
      <SingnInArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default SignIn;
