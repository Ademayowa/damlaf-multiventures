type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div>
      <h2 className='text-4xl font-bold text-white mt-40 text-center'>
        {title}
      </h2>
    </div>
  );
}
