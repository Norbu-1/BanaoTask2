import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Rightside from "./Rightside";
import Rightcopy from "./Rightcopy";

const Section = ({ use,spin }) => {
  const [user,userDetail]=useState("");
  const handleId = (itemId) => {
    const idMatch=use.filter(item=>item.id==itemId);
    userDetail(idMatch);
  };

  return (
    <div className="w-screen h-full mt-6 ml-6 flex">
      <Sidebar data={use} id={handleId} spin={spin}/>
      {user?<Rightside data={user[0]} />:
      <Rightcopy/>}
    </div>
  );
};

export default Section;
