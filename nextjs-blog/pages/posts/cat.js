import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';

const Cat = () => {
  return (
    <Layout>
      <Head>
        <title>Cat</title>
      </Head>
      <h1>What Is 'Normal' for a Cat?</h1>
      <div>
        Sleeping all day, chasing shadows all night, getting high on mysterious
        herbs -- that may be delinquent behavior for a teenager, but it's run of
        the mill for a cat. Learn more about the peculiarities of feline
        protocol so you can sort harmless kitty quirks from cat behaviors that
        could spell trouble.
      </div>
      <Image src="/cat.jpg" alt="The cat" width={700} height={500} />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};
export default Cat;
