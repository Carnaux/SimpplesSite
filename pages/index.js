import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';
import Bar from '../components/Bar';

const Home = () => {
  return (
    <	>
      <Head>
        <title>SIMPPLES</title>
      </Head>
			<Header />
			<Bar />
			<Content />
    </>
  );
}
export default Home;
