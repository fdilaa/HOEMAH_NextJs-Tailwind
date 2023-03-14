import Head from 'next/head';
import Home from '../components/Home';
import Image from 'next/image';



export default function Main() {
  return (
    <div>
      
      <Head>
        <title>HOEMAH</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home heading='Hello Client!' message='Find the most comfortable place to go home!'  />
    </div>
  );
}
