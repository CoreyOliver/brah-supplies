import { GrSubtract, GrAdd } from 'react-icons/gr'

const OrderTable = ({ SKU, orderQty, id, handleClickUp, handleClickDown, type }) => {
  return (
    <>
      <tr className="">
        <td className="hidden">{id}</td>
        <td className="text-left m-2 p-2">{SKU}</td>
        <td className="text-xl">{orderQty} {type}{orderQty>1 && 's'}</td>
        <td className="flex justify-evenly items-center">
          <span
            className="p-1 m-1 rounded-xl border-2 cursor-pointer hover:scale-125"
            onClick={() => handleClickUp(id)}
          >
            <GrAdd />
          </span>
          <span
            className="p-1 m-1 rounded-xl border-2 cursor-pointer hover:scale-125"
            onClick={() => handleClickDown(id)}
          >
            <GrSubtract />
          </span>
        </td>
      </tr>
    </>
  );
};

export default OrderTable;
