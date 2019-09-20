import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import styles from "./styles.scss";
import fetch from "isomorphic-unfetch";

const Home = props => {
  return (
    <div className={styles.example}>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <p className={styles.description}>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className={styles.row}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Learn more about Next.js in the documentation.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Next.js Learn &rarr;</h3>
            <p>Learn about Next.js by following an interactive tutorial!</p>
          </a>
          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const json = await fetch("https://api.github.com/repos/zeit/next.js").then(
    res => res.json()
  );
  return { stars: json.stargazers_count };
};

export default Home;
