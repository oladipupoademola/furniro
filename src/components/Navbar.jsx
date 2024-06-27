import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[100px] flex items-center px-[60px] justify-between shadow'>
    <div>
      <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718027289/Meubel_House_Logos-05_xh3x4o.png" alt="" />
    </div>

    <div className='flex w-[400px] justify-between'>
    <a href="">Home</a>
    <a href="">Shop</a>
    <a href="">About</a>
    <a href="">Contact</a>
    </div>

    <div className='flex w-[250px] justify-between'>
    <FaRegUser className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
    <IoSearchOutline className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
    <FaRegHeart className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
    <MdOutlineShoppingCart className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />

    </div>
    </nav>
  )
}

export default Navbar
