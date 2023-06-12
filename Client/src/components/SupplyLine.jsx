import { useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

const SupplyLine = ({ SKU, vendor, quantity, active, type }) => {
  const { qty, setQty } = useState({ quantity });

  const handleClickUp = () => {
    setQty(qty + 1)
  }
  return (
    <>
      <tr className="">
        <th scope="row"></th>
        <td className="truncate overflow-hidden">{SKU}</td>
        <td className="hidden sm:table-cell">{vendor}</td>
        <td className="hidden sm:table-cell">{active}</td>
        <td className="flex justify-evenly truncate overflow-hidden">
          {`${quantity} ${type}(s)`}
          <span
            className="p-2 rounded-xl border-2 cursor-pointer"
            onClick={handleClickUp}
          >
            <GrAdd />
          </span>
          <span
            className="p-2 rounded-xl border-2 cursor-pointer"
            // onClick={handleClickDown}
          >
            <GrSubtract />
          </span>
        </td>
      </tr>
    </>
  );
};

export default SupplyLine;
