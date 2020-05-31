import Link from "next/link";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Neffxt.js 👋</h1>
    <p>
      <Link href="/lofinForm">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
