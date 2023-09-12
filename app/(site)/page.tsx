import Hero from '@/components/Hero';
import Search from '@/components/Search';
import Property from '@/components/Property';

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className='md:px-20 xxl:mx-auto xxl:w-6/12'>
      <Hero />
      <Search />
      <Property />
    </div>
  );
}
