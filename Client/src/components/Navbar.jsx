import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-evenly items-center w-full h-full ">
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500">
              <NavLink to={"/"}>Supply List</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500">
              <NavLink to={"add"}>Add Supply</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500">
              <NavLink to={"order"}>Draft Order</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500">
              Order History
            </li>
          </ul>
          <div onClick={handleNav} className="flex md:hidden">
            <h1 className="mr-32 ml-16">Supply List</h1>
            <AiOutlineMenu size={25} className="m-auto" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">Supplies</p>
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
              <NavLink to={"/"}>Supply List</NavLink>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
              <NavLink to={"add"}>Add Supply</NavLink>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
              <NavLink to={"order"}>Draft Order</NavLink>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Draft Order
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
