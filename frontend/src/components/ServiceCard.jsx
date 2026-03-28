import React from "react";
import { FaPhone, FaEdit } from "react-icons/fa";
import serviceAPI from "../../src/apiManger/service";
import { toast } from "react-hot-toast";

const ServiceCard = ({ service, onEdit, onStatusChange }) => {
  const handleToggleStatus = async () => {
    try {
      await serviceAPI.editService(service._id, {
        active: !service.active,
      });

      toast.success(
        `Service ${!service.active ? "enabled" : "disabled"} successfully`,
      );

      if (onStatusChange) onStatusChange();
    } catch (error) {
      toast.error("Failed to update service status");
    }
  };

  return (
    <div className="mb-4 rounded-xl border bg-white p-4 shadow-md transition hover:shadow-lg sm:p-5">
      {/* Top Section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <FaPhone className="text-purple-600 text-lg sm:text-xl" />
          <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
            {service?.name}
          </h3>
        </div>

        {/* Enable/Disable Button */}
        <button
          onClick={handleToggleStatus}
          className={`${
            service?.active ? "bg-green-500" : "bg-red-500"
          } w-fit rounded-md px-3 py-1 text-sm text-white transition hover:opacity-90`}
        >
          {service?.active ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 sm:text-base">
        {service?.description}
      </p>

      {/* Price & Duration */}
      <div className="mt-4 flex flex-col gap-2 text-sm font-semibold text-gray-800 sm:flex-row sm:justify-between sm:text-base">
        <p>Price: ₹{service?.price}</p>
        <p>Duration: {service?.duration} mins</p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-sm text-blue-500 transition hover:text-blue-700 sm:text-base"
        >
          <FaEdit size={16} />
          Edit
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
