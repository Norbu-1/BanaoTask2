import React from "react";
import Profile from "./Profile";
import { FaSearch } from "react-icons/fa";
import Spinner from "./Spinner";

const Sidebar = ({ data, id, spin }) => {
  const handleId = (itemId) => {
    id(itemId);
  };

  return (
    <div className="bg-light w-[96%] md:w-[30rem]  h-100 d-flex flex-column justify-content-start rounded-tl-lg py-6 shadow-sm">
      <div className="h-[9rem] px-6 ">
        <p className="text-3xl font-bold font-serif">Registered Users</p>

        <div className="d-flex w-100 pr-4 ">
          <input
            type="text"
            placeholder="Search user"
            className="border border-gray-400 w-100 py-2 px-2 rounded-start-lg"
          />
          <button className="btn btn-primary rounded-end-lg px-4 text-center text-white ">
            <FaSearch />
          </button>
        </div>
      </div>
      <hr />
      <div className="overflow-y-auto h-100">
        {!spin || (Array.isArray(data) && data.length > 0) ? (
          data.map((item) => (
            <div className="mx-3">
              <Profile item={item} id={handleId} />
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
