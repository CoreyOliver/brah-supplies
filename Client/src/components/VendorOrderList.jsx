import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

//components

import OrderTable from "./OrderTable";

export async function loader({params}) {
  const res = await fetch(`https://brah-supplies.onrender.com/vendor/orders/${params.vendorName}`);
  const itemsToOrder = await res.json();
  return itemsToOrder;
}

export function VendorOrderList() {
  const orderItems = useLoaderData();

  const vendorList = orderItems
    .map((orderLine) => orderLine.vendor)
    .filter((e, i, arr) => arr.indexOf(e) === i);

  const [orderData, setOrderData] = useState(orderItems);


  
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);
  
  const addOrderQty = async (id, newQty) => {
    try {
      const res = await fetch(`https://brah-supplies.onrender.com/order/${id}/${newQty}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleClickUp = (id) => {
    let newCount;
    const newState = orderData.map((order) => {
      if (order._id === id) {
        const newQty = order.ordQty + 1;
        newCount = newQty;
        return { ...order, ordQty: newQty };
      }
      return order;
    });

    addOrderQty(id, newCount);
    setOrderData(newState);
  };
  
  const handleClickDown = (id) => {
    let newCount;
    const newState = orderData.map((order) => {
      if (order._id === id && order.ordQty > 0) {
          const newQty = order.ordQty - 1;
        newCount = newQty;
        return { ...order, ordQty: newQty };
      }
      return order;
    });

    setOrderData(newState);
    addOrderQty(id, newCount);
  };
  
  const vendorTables = vendorList.map((vendor, i) => (
    <OrderTable 
      key={i} 
      vendorName={vendor} 
      data={orderData.filter(orderLine => orderLine.vendor === vendor)}
      handleClickUp={handleClickUp}
      handleClickDown={handleClickDown}
      buttonText={'Submit'}
      />
  ));


  return (
    <div className="pt-20 flex flex-col justify-center items-center">
      <div>
        <button className="p-4 m-8 rounded-lg shadow-xl shadow-slate-600 no_print"
        onClick={()=>window.print()}>Print</button>

      </div>
      {vendorTables}
    </div>
  );
}

export default VendorOrderList;
