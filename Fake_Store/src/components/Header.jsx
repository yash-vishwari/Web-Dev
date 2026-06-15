import React from 'react'
import { Link } from 'react-router-dom';
import { LiaStoreAltSolid } from "react-icons/lia";


const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3">
        <div className='flex items-center gap-3'>
          <LiaStoreAltSolid className='text-[30px]'/>
          <span className='text-[20px] font-bold'>Fake Store</span>
        </div>
        <div className="flex gap-5 text-white">
          {/* Link is used to update link only*/}

          
          <Link className="hover:underline " to={"/"}>
            Home
          </Link>
          <Link className="hover:underline " to={"/about"}>
            About
          </Link>
          <Link className="hover:underline " to={"/product"}>
            Product
          </Link>
          <Link className="hover:underline " to={"/contactus"}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header
