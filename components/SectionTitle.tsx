interface Props {
  title: string;
  text?: string;
  fontBold?: boolean;
  textLeft?: boolean;
  fontSize?: boolean;
  fontBase?: boolean;
}

export default function SectionTitle({
  title,
  text,
  fontBold,
  textLeft,
  fontSize,
  fontBase,
}: Props) {
  return (
    <div className={`${textLeft ? 'text-left' : 'text-center'}`}>
      <h2
        className={`${
          fontSize ? 'text-2xl md:text-4xl' : 'text-lg'
        } font-bold tracking-wide text-white`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-1 max-w-3xl ${
          fontBase ? 'text-base' : 'text-xl'
        } ${fontBold && 'font-bold'} tracking-wide text-grayColor`}
      >
        {text}
      </p>
    </div>
  );
}
