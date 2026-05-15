import { Button } from "@heroui/react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    description,
    imageUrl,
    departureDate,
    price,
    country,
    duration,
  } = destination;

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <Image
          alt={destinationName}
          src={imageUrl}
          width={400}
          height={250}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 rounded-md    px-3 py-1 flex items-center gap-1 shadow">
          <AiFillStar className="text-yellow-400" />
          <span className="text-sm font-medium text-gray-800">4.5</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <LuMapPin className="text-red-500" />
          <span className="font-medium">{country}</span>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 leading-tight">
              {destinationName}
            </h2>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <SlCalender className="text-cyan-500" />
              <span>{duration}</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-600">${price}</h3>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full border-cyan-500 text-cyan-600 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-sm "
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
