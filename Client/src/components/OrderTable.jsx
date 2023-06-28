import OrderTableData from "./OrderTableData";


const OrderTable = ({ vendorName, data, handleClickUp, handleClickDown }) => {
  const orderLineByVendor = data.map((orderItem) => (
    <OrderTableData
      key={orderItem._id}
      id={orderItem._id}
      SKU={orderItem.SKU}
      orderQty={orderItem.ordQty}
      vendor={orderItem.vendor}
      handleClickUp={handleClickUp}
      handleClickDown={handleClickDown}
    />
  ));

  return (
    <div className="text-center py-4 my-4 bg-slate-400 border-solid shadow-2xl shadow-slate-900 hover:scale-105 rounded-xl">
      <h1 className="underline text-black">{vendorName}</h1>
      <table className="table mx-4 mt-4 pb-8">
        <tbody>
          <tr className="">
            <th scope="col" className="mx-4 px-4">
              Item Number
            </th>
            <th scope="col" className="mx-4 px-4">
              Order Qty
            </th>
            <th scope="col" className="mx-4">
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
