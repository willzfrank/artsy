import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function HeadComponent() {
  return (
    <div>
      <Head>
        <title>Artsy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>
    </div>
  );
}
