import React from "react";
import SupplyLine from "./SupplyLine";

const Supply = () => {
  return (
    <div className="pt-20 flex justify-center items-center">
      <table className="table w-full mx-8 mt-8">
        <tbody>
          <tr className="">
            <th scope="col" className=""></th>
            <th scope="col">Item Number</th>
            <th scope="col" className="hidden sm:table-cell">
              Vendor
            </th>
            <th scope="col" className="hidden sm:table-cell">
              Price/EA
            </th>
            <th scope="col" className="hidden sm:table-cell">
              Price/container
            </th>
            <th scope="col" className="hidden sm:table-cell">
              Active
            </th>
            <th scope="col">Quantity</th>
          </tr>
          <SupplyLine
            SKU={"Pregis Film"}
            vendor={"TripleP"}
            quantity={0}
            active={true}
            type={"CTN"}
            price={0.25}
          />
          <SupplyLine
            SKU={"White Padded Mailers"}
            vendor={"TripleP"}
            quantity={0}
            active={true}
            type={"CTN"}
            price={0.25}
          />
          <SupplyLine
            SKU={"J-16"}
            vendor={"TripleP"}
            quantity={0}
            active={true}
            type={"PLT"}
            price={0.25}
          />
          <SupplyLine
            SKU={'2.5"x2.25" direct thermal'}
            vendor={"RPC"}
            quantity={0}
            active={false}
            type={"RLS"}
            price={0.25}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Supply;
