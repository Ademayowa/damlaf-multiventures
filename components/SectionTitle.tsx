type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <>
      <h2 className='text-4xl font-bold text-white mt-20 lg:mt-60 text-center'>
        {title}
      </h2>
    </>
  );
}
