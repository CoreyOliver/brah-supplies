import { NavLink } from "react-router-dom";
import {
  GrAdd,
  GrSubtract,
  GrEdit,
  GrCart,
  GrCheckboxSelected,
  GrCheckbox,
} from "react-icons/gr";

const SupplyLine = ({
  SKU,
  vendor,
  quantity,
  type,
  handleClickUp,
  handleClickDown,
  id,
  minLevel,
  orderQty,
}) => {
  return (
    <>
      <tr className="hover:scale-110">
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
          <span className="flex justify-around"> 
          { orderQty > 0 ? <GrCheckboxSelected className="mx-2" /> :  <GrCheckbox className="mx-2"size={15} /> }
            <GrCart className="mx-2 cursor-pointer" /> 
          </span>
        </td>
      </tr>
    </>
  );
};

export default SupplyLine;
