import { PropertiesData } from "../../assets/data/PropertiesData";
import Card from "../../components/Card";
import SectionHeading from "../../components/SectionHeading";

export default function Properties() {
  const sectionHeadingValues = {
    sectionName: "Properties",
    title: "Grab your Dream Property",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
  };
  return (
    <section>
      <div className='container'>
        <SectionHeading sectionHeadingValues={sectionHeadingValues} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PropertiesData.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
