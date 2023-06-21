import { useLoaderData } from "react-router-dom";
import SupplyLine from "./SupplyLine";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch("http://localhost:3000");
  const supplies = await res.json();
  return supplies;
}

export function OrderList() {
  const supplies = useLoaderData();
  const [data, setData] = useState(supplies);

  const addQty = async (id, newQty) => {
    try {
      const res = await fetch(`http://localhost:3000/count/${id}/${newQty}`, {
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
  useEffect(() => {
    console.log(data);
  }, [data]);

  // useEffect(()=>{
  //   console.log(supplies)
  // }, [])

  const handleClickUp = (id) => {
    let newCount;
    const newState = data.map((supply) => {
      if (supply._id === id) {
        const newQty = supply.quantity + 1;
        newCount = newQty;
        return { ...supply, quantity: newQty };
      }
      return supply;
    });

    addQty(id, newCount);
    setData(newState);
  };

  const handleClickDown = (id) => {
    let newCount;
    const newState = data.map((supply) => {
      if (supply._id === id) {
        const newQty = supply.quantity - 1;
        newCount = newQty;
        return { ...supply, quantity: newQty };
      }
      return supply;
    });

    setData(newState);
    addQty(id, newCount);
  };

  // const supplyList = data.map((supply) => (
  //   <SupplyLine
  //     key={supply._id}
  //     SKU={supply.SKU}
  //     vendor={supply.vendor}
  //     quantity={supply.quantity}
  //     active={supply.active}
  //     type={supply.type}
  //     price={supply.price}
  //     handleClickUp={handleClickUp}
  //     handleClickDown={handleClickDown}
  //     id={supply._id}
  //   />
  // ));

  return (
    <div className="pt-20 flex justify-center items-center">
      <table className="table w-full mx-8 mt-8" >
        <tbody>
          <tr className="">
            <th scope="col" className=""></th>
            <th scope="col" >Edit</th>
            <th scope="col">Item Number</th>
            <th scope="col" className="hidden sm:table-cell">
              Vendor
            </th>
            <th scope="col" className="hidden md:table-cell">
              Price/EA
            </th>
            <th scope="col" className="hidden sm:table-cell">
              Price/container
            </th>
            <th scope="col" className="hidden md:table-cell">
              Active
            </th>
            <th scope="col">Quantity</th>
          </tr>

          {/* {supplyList} */}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
