import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Details from "./Details";
const Rightside = ({ data }) => {
  
  return (
    <div className="md:w-[80%] h-full hidden md:block">
      <div className="w-full h-20 bg-slate-100 shadow-sm flex items-center pl-4 gap-4 ">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={data.avatar}
          alt="image"
        />
        <div className="">
          <h3 className="mb-0">{data.profile.username}</h3>
          <p className="mb-0">{data.jobTitle}</p>
        </div>
      </div>
      <div className="pt-4 mb-0 ml-14 flex items-center justify-between mr-24">
      <p className="flex gap-3 justify-start">
        <FaRegAddressCard className=" h-11 w-11" />
        <h1 className="font-serif mb-0">Profile</h1>
      </p>
      <p className="flex gap-3 text-xl cursor-pointer">
      <CiStar />
      <BsThreeDotsVertical />
         </p></div>
         <Details data={data}/>
    </div>
  );
};

export default Rightside;
