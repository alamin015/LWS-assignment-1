import BathroomSvg from "./BathroomSvg";
import BedroomSvg from "./BedroomSvg";

export default function Card({ property }) {
  return (
    <div className='p-4 bg-white rounded-lg border border-gray-600/10'>
      <img src={property.img} alt='property' />

      <div className='p-6'>
        <h4 className='text-2xl font-bold cursor-pointer'>{property.name}</h4>
        <div className='mt-2'>
          <span className='text-xl font-extrabold text-blue-600'>
            ${property.price}
          </span>{" "}
          /M
        </div>
      </div>
      <div className='flex justify-between p-4 text-gray-700 border-t border-gray-300'>
        <div className='flex items-center'>
          <BedroomSvg />
          <p>
            <span className='font-bold text-gray-900'>{property.bedrooms}</span>{" "}
            Bedrooms
          </p>
        </div>
        <div className='flex items-center'>
          <BathroomSvg />
          <p>
            <span className='font-bold text-gray-900'>
              {property?.bathrooms}
            </span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
