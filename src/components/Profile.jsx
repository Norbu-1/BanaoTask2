import { useState } from "react";

import Details from "./Details";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
const Profile = ({ item, id }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleProfile = (itemId) => {
    id(itemId);
    setShowDetails(!showDetails); // Toggle showDetails state
  };

  return (
    <div key={item.id} className="relative">
      {item.avatar && (
        <div
          className="flex justify-between items-center w-full h-auto py-2 hover:bg-blue-100 px-3 rounded cursor-pointer"
          onClick={() => handleProfile(item.id)}
        >
          <div className="flex gap-3 lg:gap-4">
          <img
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border border-black"
            src={item.avatar}
            alt="Avatar"
          />
          <div className="flex flex-col w-auto">
            <p className="font-semibold mb-1 text-lg">
              {item.profile.username}
            </p>
            <p className="mb-0 text-sm">{item.jobTitle}</p>
          </div></div>
          <div className="text-lg text-blue-700 md:hidden">
            {showDetails ? (
              <IoIosArrowDropupCircle />
            ) : (
              <IoIosArrowDropdownCircle />
            )}
          </div>
        </div>
      )}
      {showDetails ? <p className="md:hidden"><Details data={item} /></p> : null}
    </div>
  );
};

export default Profile;
