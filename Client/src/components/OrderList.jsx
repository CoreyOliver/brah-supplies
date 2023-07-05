import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

//components

import OrderTable from "./OrderTable";

export async function loader() {
  const res = await fetch("https://brah-supplies.onrender.com/orders");
  const itemsToOrder = await res.json();
  return itemsToOrder;
}

export function OrderList() {
  const orderItems = useLoaderData();

  const vendorList = orderItems
    .map((orderLine) => orderLine.vendor)
    .filter((e, i, arr) => arr.indexOf(e) === i);

  const [orderData, setOrderData] = useState(orderItems);


  
  // useEffect(() => {
  //   console.log(orderData);
  // }, [orderData]);
  
  const addOrderQty = async (id, newQty) => {
    try {
      const res = await fetch(`https://brah-supplies.onrender.com/order/${id}/${newQty}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json()
      // console.log(data)
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
      buttonText={`Order Here`}
      />
  ));


  return (
    <div className="pt-20 flex flex-col justify-center items-center">
      {vendorTables}
    </div>
  );
}

export default OrderList;
