type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <>
      <h2 className='text-4xl font-bold text-white mt-40 md:mt-60 text-center'>
        {title}
      </h2>
    </>
  );
}
