import { useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

const SupplyLine = ({ SKU, vendor, quantity, active, type, price }) => {
  const { qty, setQty } = useState({quantity});

  const handleClickUp = () => {
    setQty((prevState) => {
      return prevState + 1
    })
    console.log(qty)
  }
  return (
    <>
      <tr className="">
        <th scope="row"></th>
        <td className="truncate overflow-hidden">{SKU}</td>
        <td className="hidden sm:table-cell">{vendor}</td>
        <td className="hidden sm:table-cell">$ {price}/ea</td>
        <td className="hidden sm:table-cell">$ {price}/{type}</td>
        <td className="hidden sm:table-cell">{ active ? 'Y' : 'N'}</td>
        <td className="flex justify-evenly truncate overflow-hidden">
          {`${ quantity } ${type}(s)`}
          <span
            className="p-2 rounded-xl border-2 cursor-pointer"
            // onClick={handleClickUp}
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
