import { FaqData } from "../../assets/data/FaqData";
import BackgroundSvg from "../../components/BackgroundSvg";
import FaqItems from "../../components/FaqItems";
import SectionHeading from "../../components/SectionHeading";

export default function Faq() {
  const sectionHeadingValues = {
    sectionName: "FAQ",
    title: "Any Questions? Look Here",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
  };

  return (
    <section className='relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]'>
      <div className='container mx-auto'>
        <SectionHeading sectionHeadingValues={sectionHeadingValues} />
        <div className='-mx-4 grid grid-cols-1 md:grid-cols-2'>
          {FaqData.map((item) => (
            <FaqItems key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <span className='absolute left-4 top-4 -z-[1]'>
          <BackgroundSvg />
        </span>
        <span className='absolute bottom-4 right-4 -z-[1]'>
          <BackgroundSvg />
        </span>
      </div>
    </section>
  );
}
