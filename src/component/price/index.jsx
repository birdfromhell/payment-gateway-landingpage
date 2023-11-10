import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterTwo from "@/layout/footers/footers-2";
import HeaderTwo from "@/layout/headers/header-2";
import React from "react";
import PriceArea from "./price-area";

const Price = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo />
            <PriceArea />
          </main>
          <FooterTwo style_contact={true} style_team={true}/>
        </div>
      </div>
    </>
  );
};

export default Price;
