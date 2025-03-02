import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import HomeContent from "../components/HomeContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coincrafter</title>
        <meta
          content="Coincrafter is a project that combines RainbowKit with Solidity"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout>
        <HomeContent />
      </Layout>
    </>
  );
};

export default Home;
