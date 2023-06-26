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
  const [orderData, setOrderData] = useState(orderItems);



  
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);



  // const addQty = async (id, newQty) => {
    //   try {
  //     const res = await fetch(`http://localhost:3000/count/${id}/${newQty}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const handleClickUp = (id) => {
  //   let newCount;
  //   const newState = data.map((supply) => {
  //     if (supply._id === id) {
  //       const newQty = supply.quantity + 1;
  //       newCount = newQty;
  //       return { ...supply, quantity: newQty };
  //     }
  //     return supply;
  //   });

  //   addQty(id, newCount);
  //   setData(newState);
  // };

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



  return (
    <div className="pt-20 flex justify-center items-center">
      <OrderTable />
    </div>
  );
}

export default OrderList;
