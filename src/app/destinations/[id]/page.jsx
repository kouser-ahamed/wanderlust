import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  const {
    _id,
    destinationName,
    description,
    imageUrl,
    departureDate,
    price,
    country,
    duration,
  } = destination;

  console.log(id);
  console.log(destination);
  return (
    <div className="max-w-7xl mx-auto">
     <div className="flex items-center justify-end gap-3 mt-5 mb-3">
       <EditModal destination={destination} />
      <DeleteAlert destination={destination} />
     </div>
      <Image className="w-full h-100 object-cover" alt={destinationName} src={imageUrl} width={600} height={400} />
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
        <h2 className="text-2xl font-bold mt-10">Overview</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
