import Layout from "../components/Layout";

export default ({ url }) => (
  <Layout>
    { url.query.id }
  </Layout>
)