import { TeamData } from "../../assets/data/TeamData";
import SectionHeading from "../../components/SectionHeading";
import TeamCard from "../../components/TeamCard";
export default function Team() {
  const sectionHeadingValues = {
    sectionName: "Our Team Members",
    title: "Our Clients",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
  };

  return (
    <section
      id='team'
      className='overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]'
    >
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <SectionHeading sectionHeadingValues={sectionHeadingValues} />
          </div>
        </div>
        <div className='-mx-4 flex flex-wrap justify-center'>
          {TeamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
