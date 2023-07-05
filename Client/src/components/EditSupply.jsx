import { useState, useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const res = await fetch(`https://brah-supplies.onrender.com/edit/${params.id}`);
  const singleSupply = await res.json();
  // console.log(singleSupply)
  return singleSupply;
}

const EditSupply = () => {
  const singleSupply = useLoaderData();
  // console.log(singleSupply);

  const [editFormData, setEditFormData] = useState({
    id: singleSupply._id,
    SKU: singleSupply.SKU,
    vendor: singleSupply.vendor,
    price: singleSupply.price,
    type: singleSupply.type,
    unitCount: singleSupply.unitCount,
    quantity: singleSupply.quantity,
    active: singleSupply.active,
    minLevel: singleSupply.minLevel,
    orderQty: singleSupply.orderQty
  });

  const handleChange = (e) => {
    setEditFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleToggle = (e) => {
    setEditFormData((prevState) => {
      return {
        ...prevState,
        active: !editFormData.active,
      };
    });
  };

  const clearForm = () => {
    setEditFormData(() => {
      return {
        SKU: "",
        vendor: "",
        price: 0,
        type: "",
        unitCount: 0,
        active: true,
      };
    });
  };



  useEffect(() => {
    console.log(editFormData);
  }, [editFormData]);

  return (
    <div className="pt-40 flex justify-around items-center m-auto">
      <Form
        method="PUT"
        id="supplies-form"
        className="flex flex-col w-full items-center"
        // onSubmit={handleSubmit}
      >
        <div className="p-8 border-s-slate-400">
          <span className="p-4 text-left w-[90%]">Item ID</span>
          <input
            placeholder="id"
            readOnly
            type="text"
            name="id"
            value={editFormData.id}
            className="text-center rounded-md shadow-xl shadow-gray-300 bg-slate-500 text-xs text-white"
          />
        </div>
        <div className="p-8 border-s-slate-400">
          <span className="p-4 text-left w-[90%]">Item:</span>
          <input
            placeholder="SKU"
            autoComplete="off"
            type="text"
            name="SKU"
            value={editFormData.SKU}
            onChange={(e) => handleChange(e)}
            className="text-center rounded-md shadow-xl shadow-gray-300"
          />
        </div>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Vendor:</span>
          <input
            list="vendors"
            type="list"
            name="vendor"
            placeholder="Vendor"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            autoComplete="off"
            value={editFormData.vendor}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Price:</span>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.price || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Container Type</span>
          <input
            type="list"
            list="containers"
            name="type"
            placeholder="Container Type"
            autoComplete="off"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.type}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Units/container</span>
          <input
            type="number"
            name="unitCount"
            placeholder="Units/container"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.unitCount || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Units/container</span>
          <input
            type="number"
            name="minLevel"
            placeholder="Minimum Level"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.minLevel}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Quantity</span>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.quantity || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {/* <label className="p-8">
          <span className="p-4 text-left w-[90%]">order</span>
          <input
            type="number"
            name="orderQty"
            placeholder="order quantity"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.orderQty}
            onChange={(e) => handleChange(e)}
          />
        </label> */}
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Active</span>
          <input
            name="active"
            placeholder="active"
            type="checkbox"
            defaultChecked
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={editFormData.active}
            onChange={(e) => handleToggle(e)}
          />
        </label>
        <div className="p-8 flex justify-around flex-col">
          <button className="m-4 p-4 bg-slate-400 rounded-xl w-full hover:scale-110 hover:ease-in ">
            Submit
          </button>
        </div>
      </Form>

      <datalist id="vendors">
        <option value="TripleP"></option>
        <option value="RPC"></option>
        <option value="SI Printing"></option>
      </datalist>

      <datalist id="containers">
        <option value="Roll"></option>
        <option value="Carton"></option>
        <option value="Pallet"></option>
        <option value="EA"></option>
      </datalist>
    </div>
  );
};

export default EditSupply;
