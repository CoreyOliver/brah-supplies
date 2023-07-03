import { useState, useEffect } from "react";
import { Form } from "react-router-dom";


const AddSupply = () => {
  const [formData, setFormData] = useState({
    SKU: "",
    vendor: "",
    price: 0,
    type: "",
    unitCount: 0,
    active: true,
    minLevel: 0
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  // const handleToggle = (e) => {
  //   setFormData((prevState) => {
  //     return {
  //       ...prevState,
  //       active: !formData.active,
  //     };
  //   });
  // };
  const handleSubmit = () => {
    clearForm()
  }

  const clearForm = () => {
    setFormData(() => {
      return { SKU: "", vendor: "", price: 0, type: "", unitCount: 0, active: true };
    });
  };


  // use to see form updates
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="pt-40 flex justify-around items-center m-auto">
      <Form
        method="POST"
        id="supplies-form"
        className="flex flex-col w-full items-center"
        onSubmit={handleSubmit}
      >
        <div className="p-8 border-s-slate-400">
          <span className="p-4 text-left w-[90%]">Item:</span>
          <input
            placeholder="SKU"
            autoComplete="off"
            type="text"
            name="SKU"
            value={formData.SKU}
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
            value={formData.vendor}
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
            value={formData.price || ""}
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
            value={formData.type}
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
            value={formData.unitCount || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Min Level</span>
          <input
            type="number"
            name="minLevel"
            placeholder="Minimum Level"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={formData.minLevel || ""}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="p-8 flex justify-around flex-col">
          <button className="m-4 p-4 bg-slate-400 rounded-xl w-full hover:scale-110 hover:ease-in ">
            Submit
          </button>
          <p
            className="m-4 p-4 bg-slate-400 rounded-xl w-full text-center hover:scale-110 hover:ease-in "
            onClick={() => clearForm()}
          >
            Clear
          </p>
        </div>
      </Form>

      <datalist id="vendors">
        <option value="TripleP"></option>
        <option value="RPC"></option>
        <option value="SI Printing"></option>
        <option value="UPS"></option>
        <option value="Uline"></option>
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

export default AddSupply;
