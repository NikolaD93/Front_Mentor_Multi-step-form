import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../constants/data";

const Sidebar = () => {
  return (
    <aside className="bg-desktop bg-cover bg-no-repeat w-[100%] h-[100%] pt-8 pl-4 basis-1/3 rounded-lg">
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex items-center space-x-4 leading-4 mb-10"
          >
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#000" : "hsl(229, 24%, 87%)",
                background: isActive ? "hsl(228, 100%, 84%)" : "transparent",
                border: isActive ? "none" : "2px solid hsl(229, 24%, 87%)",
                fontWeight: "500",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
              to={item.linkTo}
            >
              {item.id}
            </NavLink>
            <div>
              <p className="uppercase text-neutral-coolGray text-[14px]">
                {item.step}
              </p>
              <p className="uppercase text-neutral-lightGray font-[500] tracking-wider">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
