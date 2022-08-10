import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import InternalHeader from "../../components/internalHeader";
import Theme from '../../../config/theme';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <InternalHeader/>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  boxShadow: `0.5rem 0 0 ${Theme.colors.primary.base}, -0.5rem 0 0 ${Theme.colors.primary.base}`,
                  backgroundColor: Theme.colors.primary.base,
                  color: "white",
                  padding: "1rem",
                }}
              >
                Últimas Postagens
              </h1>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
