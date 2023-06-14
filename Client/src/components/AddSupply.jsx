import { useState, useEffect } from "react";
import { Form } from "react-router-dom";


//need to connect the form to an api request. routes through express or connect router dom to action?
const AddSupply = () => {
  const [formData, setFormData] = useState({
    SKU: "",
    vendor: "",
    price: 0,
    type: "",
    active: true,
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleToggle = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        active: !formData.active,
      };
    });
  };

  const clearForm = () => {
    setFormData(() => {
      return { SKU: "", vendor: "", price: 0, type: "", active: true };
    });
    alert('Form Cleared')
  };
  

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="pt-40 flex justify-around items-center m-auto">
      <Form
        method="post"
        id="contact-form"
        className="flex flex-col w-full items-center"
      >
        <div className="p-8 border-s-slate-400">
          <span className="p-4 text-left w-[90%]">Item:</span>
          <input
            placeholder="SKU"
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
            value={formData.price}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Container Type</span>
          <input
            type="text"
            name="type"
            placeholder="Container Type"
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={formData.type}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="p-8">
          <span className="p-4 text-left w-[90%]">Active</span>
          <input
            name="active"
            placeholder="active"
            type="checkbox"
            defaultChecked
            className="text-center rounded-md shadow-xl shadow-gray-300"
            value={formData.active}
            onChange={(e) => handleToggle(e)}
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
      </datalist>
    </div>
  );
};

export default AddSupply;
