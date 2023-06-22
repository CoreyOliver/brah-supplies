import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GrAdd, GrSubtract, GrEdit } from "react-icons/gr";

const SupplyLine = ({ SKU, vendor, quantity, type, price, handleClickUp, handleClickDown, id, minLevel, unitCount }) => {

 return (
    <>
      <tr className="">
        <th scope="row"></th>
        <td className=""><NavLink to={`edit/${id}`} className="flex justify-center"><GrEdit className="" /></NavLink></td>
        <td className="truncate overflow-hidden">{SKU}</td>
        <td className="hidden sm:table-cell">{vendor}</td>
        {/* <td className="hidden md:table-cell">$ {price}/ea</td> */}
        <td className="hidden sm:table-cell">$ {Math.ceil(price * unitCount)} /{type}</td>
        {/* <td className="hidden md:table-cell">{minLevel}</td> */}
        <td className={ quantity > minLevel ? "flex justify-evenly truncate overflow-hidden" : "flex justify-evenly truncate overflow-hidden bg-red-700" }>
          {`${ quantity } ${type}(s)`}
          <span
            className="p-2 rounded-xl border-2 cursor-pointer"
            onClick={()=> handleClickUp(id)}
          >
            <GrAdd />
          </span>
          <span
            className="p-2 rounded-xl border-2 cursor-pointer"
            onClick={() => handleClickDown(id)}
          >
            <GrSubtract />
          </span>
        </td>
      </tr>
    </>
  );
};

export default SupplyLine;
