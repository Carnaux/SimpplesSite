import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`
const Home = () => {
  return (
    <div>
      <Head>
        <title>Simpples</title>
      </Head>
			<h1>Simpples Site</h1>
    </div>
  );
}
export default Home;
