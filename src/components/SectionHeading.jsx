/* eslint-disable react/prop-types */
export default function SectionHeading({ sectionHeadingValues }) {
  const { title, description, sectionName } = sectionHeadingValues;
  return (
    <div className='mx-auto mb-12 max-w-[520px] text-center lg:mb-[70px]'>
      <span className='mb-2 block text-lg font-semibold text-primary'>
        {sectionName}
      </span>
      <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
        {title}
      </h2>
      <p className='text-base text-body-color dark:text-dark-6'>
        {description}
      </p>
    </div>
  );
}
