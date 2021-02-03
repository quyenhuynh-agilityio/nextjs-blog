import { useRouter } from 'next/router';
import Link from 'next/link';

const Cat = () => {
  const router = useRouter();
  const { slug } = router.query || {};

  return (
    <>
      <h2>{slug} Cat Breed</h2>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>
    </>
  );
};

export default Cat;
