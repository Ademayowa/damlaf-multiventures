type Props = {
  query: string;
  category: string;
};

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className='text-white ml-5'>
        Search results for "{query}" in{' '}
        <span className='capitalize'>{category}</span>
      </h1>
    );
  }

  if (query) {
    return <h1 className='ml-5'>Search results for "{query}"</h1>;
  }

  if (category) {
    return (
      <h1 className='ml-5 text-white mt-10'>
        <span className='capitalize'>{category} Properties</span>
      </h1>
    );
  }

  return <h1 className='self-start text-white'>Oops, No Results Found</h1>;
};

export default Header;
