import Link from 'next/link';

const AboutMePage = () => {
  return (
    <>
      <h1>This is About/Me page</h1>
      <Link href="/about">Go back About page</Link>
    </>
  );
};

export default AboutMePage;
