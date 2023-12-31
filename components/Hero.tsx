export default function HeroPage() {
  return (
    <section className='relative'>
      <div className='mt-10 grid place-items-center px-5 md:mt-20 md:px-20'>
        <h1 className='max-w-lg text-3xl font-bold capitalize tracking-wider text-white lg:max-w-3xl md:text-[64px] md:leading-tight'>
          We can find just the right property for you
        </h1>
        <p className='mt-5 text-lg font-light !leading-normal tracking-wide text-[#8391A6] md:mt-5 md:max-w-2xl md:text-2xl lg:w-9/12'>
          Find new and featured apartment located in your city. <br /> We'll
          find the best apartment options for you today.
        </p>
      </div>

      {/* Background Gradient  */}
      <div className='pinkGradient absolute top-0 z-[0] h-[95%] w-[95%]' />
      <div className='whiteGradient absolute bottom-40 z-[1] h-[60%] w-[60%] rounded-full' />
      <div className='blueGradient absolute right-20 bottom-20 z-[0] h-[100%] w-[100%]' />
    </section>
  );
}
