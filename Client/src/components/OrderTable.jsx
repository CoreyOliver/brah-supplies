import OrderTableData from "./OrderTableData";
import { useNavigate } from "react-router-dom";
const OrderTable = ({ vendorName, data, handleClickUp, handleClickDown, buttonText }) => {
  const navigate = useNavigate()

  const orderLineByVendor = data.map((orderItem) => (
    <OrderTableData
      key={orderItem._id}
      id={orderItem._id}
      SKU={orderItem.SKU}
      orderQty={orderItem.ordQty}
      vendor={orderItem.vendor}
      type={orderItem.type}
      handleClickUp={handleClickUp}
      handleClickDown={handleClickDown}
    />
  ));

  const checkItOut = (vendor) => {
    navigate(`/vendorOrder/${vendor}`)
  }

  return (
    <div className="text-center py-4 my-4 bg-slate-400 border-solid shadow-2xl shadow-slate-900 hover:scale-105 rounded-xl">
      <div className="flex items-center justify-evenly">
        <h1 className="underline text-black">{vendorName}</h1>
        <button className="rounded-md p-2 hover:scale-125 no_print" name={vendorName} onClick={(e) => checkItOut(e.target.name)}>{buttonText}</button>
      </div>
      <table className="table mx-4 mt-4 pb-8">
        <tbody>
          <tr className="">
            <th scope="col" className="mx-4 px-4">
              Item Number
            </th>
            <th scope="col" className="mx-4 px-4">
              Order Qty
            </th>
            <th scope="col" className="mx-4 no_print">
              + / -
            </th>
          </tr>
          {orderLineByVendor}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
