import { FeaturesData } from "../../assets/data/FeaturesData";
import Feature from "../../components/Feature";
import SectionHeading from "../../components/SectionHeading";

export default function Features() {
  const sectionHeadingValues = {
    sectionName: "Features",
    title: "Main Features Of Play",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
  };

  return (
    <section className='pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]'>
      <div className='container'>
        <SectionHeading sectionHeadingValues={sectionHeadingValues} />
        <div className='-mx-4 flex flex-wrap'>
          {FeaturesData.map((item) => (
            <Feature key={item.id} item={item}></Feature>
          ))}
        </div>
      </div>
    </section>
  );
}
