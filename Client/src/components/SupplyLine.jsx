import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GrAdd, GrSubtract, GrEdit, GrCart } from "react-icons/gr";

const SupplyLine = ({
  SKU,
  vendor,
  quantity,
  type,
  price,
  handleClickUp,
  handleClickDown,
  id,
  minLevel,
  unitCount,
}) => {
  return (
    <>
      <tr className="">
        <th scope="row"></th>
        <td className="hidden md:table-cell">
          <NavLink to={`edit/${id}`} className="flex justify-center">
            <GrEdit className="" />
          </NavLink>
        </td>
        <td className="truncate text-xs text-left">{SKU}</td>
        <td className="table-cell text-xs">{vendor}</td>
        <td className={quantity > minLevel ? "text-xs" : " bg-red-700 text-xs"}>
          {`${quantity} ${type}(s)`}
        </td>
        <td className="flex justify-evenly items-center">
          <span
            className="p-1 m-1 rounded-xl border-2 cursor-pointer"
            onClick={() => handleClickUp(id)}
          >
            <GrAdd />
          </span>
          <span
            className="p-1 m-1 rounded-xl border-2 cursor-pointer"
            onClick={() => handleClickDown(id)}
          >
            <GrSubtract />
          </span>
        </td>
        <td className="">
          <span className="flex justify-between">
            <input type="number" className="w-10 mx-2 rounded-md" defaultValue={0} />
            <GrCart className="mx-2 cursor-pointer" />
          </span>
        </td>
      </tr>
    </>
  );
};

export default SupplyLine;
