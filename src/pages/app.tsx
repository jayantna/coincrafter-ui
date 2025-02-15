import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import AppContent from "../components/AppContent";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coincrafter - App</title>
        <meta
          content="Create your ERC20 token with Coincrafter"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout>
        <AppContent />
      </Layout>
    </>
  );
};

export default App;
