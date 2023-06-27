import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

//components

import OrderTable from "./OrderTable";

export async function loader() {
  const res = await fetch("http://localhost:3000/orders");
  const itemsToOrder = await res.json();
  return itemsToOrder;
}

export function OrderList() {
  const orderItems = useLoaderData();
  const vendorList = orderItems
    .map((orderLine) => orderLine.vendor)
    .filter((e, i, arr) => arr.indexOf(e) === i);

  const [orderData, setOrderData] = useState(orderItems);


  
  useEffect(() => {
    console.log(orderData, vendorTables);
  }, [orderData]);
  
  const addOrderQty = async (id, newQty) => {
    try {
      const res = await fetch(`http://localhost:3000/order/${id}/${newQty}`, {
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
    const newState = orderData.map((supply) => {
      if (supply._id === id) {
        const newQty = supply.orderQty + 1;
        newCount = newQty;
        return { ...supply, orderQty: newQty };
      }
      return supply;
    });

    addOrderQty(id, newCount);
    setOrderData(newState);
  };
  
  // const handleClickDown = (id) => {
  //   let newCount;
  //   const newState = data.map((supply) => {
  //     if (supply._id === id) {
    //       const newQty = supply.quantity - 1;
  //       newCount = newQty;
  //       return { ...supply, quantity: newQty };
  //     }
  //     return supply;
  //   });

  //   setData(newState);
  //   addQty(id, newCount);
  // };
  
  const vendorTables = vendorList.map((vendor, i) => (
    <OrderTable 
      key={i} 
      vendorName={vendor} 
      data={orderData.filter(orderLine => orderLine.vendor === vendor)}
      handleClickUp={handleClickUp}
      />
  ));


  return (
    <div className="pt-20 flex flex-col justify-center items-center">
      {vendorTables}
    </div>
  );
}

export default OrderList;
