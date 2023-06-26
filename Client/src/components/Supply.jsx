import { useLoaderData } from "react-router-dom";
import SupplyLine from "./SupplyLine";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch("http://localhost:3000");
  const supplies = await res.json();
  return supplies;
}

export function Supply() {
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
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(data);
    // console.log(data.map(e=> e.orderQty))
  }, [data]);

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
      if (supply._id === id && supply.quantity > 0) {
        const newQty = supply.quantity - 1;
        newCount = newQty;
        return { ...supply, quantity: newQty };
      }
      return supply;
    });

    setData(newState);
    addQty(id, newCount);
  };

  const filterClick = (id) => {
    const filteredState = data.map(supply => supply).filter(supply => supply.vendor === id)
    setData(filteredState)
  }

  const unfilterClick = () => {
    setData(supplies)
  }

  const supplyList = data.map((supply) => (
    <SupplyLine
      key={supply._id}
      SKU={supply.SKU}
      vendor={supply.vendor}
      quantity={supply.quantity}
      type={supply.type}
      unitCount={supply.unitCount}
      price={supply.price}
      id={supply._id}
      minLevel={supply.minLevel}
      handleClickUp={handleClickUp}
      handleClickDown={handleClickDown}
      orderQty={supply.orderQty}
    />
  ));

  const vendorList = data.map((supply) => supply.vendor).filter( (e,i,arr) => arr.indexOf(e) === i)

  const vendorRender = vendorList.map(supplyVendor => (
    <li key={Math.random()}className="sm:p-4 shadow-sm shadow-slate-600 m-2 text-xs sm:rounded-full cursor-pointer" onClick={(e)=>filterClick(e.target.innerText)}>{supplyVendor}</li>
  ))


  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center pt-32 flex-wrap max-w-[50%]">
        <ul className="w-full flex items-center justify-between flex-wrap border-slate-400 border-2 flex-auto">
          <li className="sm:p-4 shadow-sm shadow-slate-600 m-2 text-xs sm:rounded-full cursor-pointer" onClick={unfilterClick}>All</li>
          {vendorRender}
          </ul>
      </div>
      <div className="pt-8 flex justify-center items-center px-8 mx-auto">
        <table className="table mx-4 mt-4 pb-8">
          <tbody>
            <tr className="">
              <th scope="col" className=""></th>
              <th scope="col" className="text-xs hidden md:table-cell">
                Edit
              </th>
              <th scope="col" className="text-xs">Item Number</th>
              <th scope="col" className="text-xs table-cell sm:text-xs">
                Vendor
              </th>
              <th scope="col" className="text-xs">Quantity</th>
              <th scope="col" className="text-xs">+ / -</th>
              <th scope="col" className="text-xs">Add</th>
            </tr>
            {supplyList}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Supply;
