import { getProperties } from '@/sanity/schemas/actions';
import { Property } from '@/types';
import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';
import SectionTitle from '@/components/SectionTitle';
import Filters from '@/components/Filters';
import Header from '@/components/Header';
import PropertyList from '@/components/PropertyList';

export const revalidate = 1000;

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default async function HomePage({ searchParams }: Props) {
  const properties: Property[] = await getProperties({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  return (
    <section className='md:px-20 xxl:mx-auto xxl:w-6/12'>
      <Hero />

      <div className='relative mt-5 mx-auto flex w-11/12 flex-col justify-between rounded-lg bg-[#1d1e34] py-10 shadow-lg md:w-11/12 md:flex-row md:p-5 lg:w-8/12'>
        <SearchForm />

        <div className='mx-2 flex flex-auto items-center md:mx-0 md:flex-none'>
          <button className='flex flex-auto justify-center rounded bg-blueColor px-5 py-4 font-bold text-white md:py-3'>
            Find properties
          </button>
        </div>
      </div>

      <div className='px-5 text-center'>
        <SectionTitle title='Latest Properties' />
        <Filters />
      </div>

      {(searchParams?.query || searchParams?.category) && (
        <div className='text-white text-2xl font-bold'>
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />
        </div>
      )}

      <div className='properties'>
        {properties?.length > 0 ? (
          properties.map((property: Property) => (
            <PropertyList
              key={property._id}
              title={property.title}
              image={property.image}
              slug={property.slug.current}
              price={property.price}
            />
          ))
        ) : (
          <p className='text-white text-lg'>Oops, No Results Found</p>
        )}
      </div>
    </section>
  );
}
