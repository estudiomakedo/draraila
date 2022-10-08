import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import { withPrefix } from "gatsby";
import SchedulePortal from "../components/shared/SchedulePortal";
import { SEO } from "../components/Seo";

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <SEO />


        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <SchedulePortal/>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
