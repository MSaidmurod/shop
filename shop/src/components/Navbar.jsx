import { NavLink } from "react-router-dom";

// icon
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSolidLayer } from "react-icons/bi";
function Navbar() {
  return (
    <div className="bg-indigo-500">
      <div className="max-w-7xl  py-4 max-xl:px-4 flex justify-between mx-auto">
        <div className="flex gap-5 items-center">
          <div className="dropdown hidden max-md:block dropdown-hover">
            <div tabIndex={0} role="button" className="bg-inherit m-1">
              <BiSolidLayer className="text-white text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
          <h1 className="font-serif max-md:hidden cursor-pointer select-none text-white text-2xl">
            ONLINE SHOP
          </h1>
          <form className="">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </form>
        </div>
        <div className="flex text-white items-center">
          <div className="max-md:hidden text-xl font-serif flex gap-4 items-center">
            <NavLink>Home</NavLink>
            <NavLink>Link</NavLink>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className=" flex items-center bg-inherit m-1"
              >
                Dropdown <MdOutlineArrowDropDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 text-black  bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Action</a>
                </li>
                <li>
                  <a>Another action</a>
                </li>
              </ul>
            </div>
            <div className="w-[2px] h-7 mx-2 border"></div>
          </div>
          <div className="relative">
            <RiShoppingCartLine className="text-2xl cursor-pointer text-white" />
            <div className="badge absolute -top-2 -right-3 badge-secondary badge-sm">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
