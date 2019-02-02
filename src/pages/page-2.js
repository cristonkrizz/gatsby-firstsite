import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="container">
      <div class="row">
        <div class="col-6"> hello world</div>
        <div class="col-6">hello world</div>
      </div>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
