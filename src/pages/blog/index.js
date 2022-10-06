import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import InternalHeader from "../../components/internalHeader";
import Theme from '../../../config/theme';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <InternalHeader title="Últimas Postagens" />
        <section className="section" style={{backgroundColor: Theme.colors.secondary.light, paddingTop: 100}}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
