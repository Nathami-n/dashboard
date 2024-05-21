"use client";
import { usePathname } from "next/navigation";
import {MdNotifications, MdOutlineChat, MdPublic, MdSearch} from 'react-icons/md';

const Navbar = () => {

  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center soft rounded-md p-3">
      <div className="uppercase font-bold">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        {/* search*/}
        <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-md">
          <MdSearch/>
          <input type="text" placeholder="search..." className="bg-transparent border-none text-white outline-none"/>
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20} />
        </div>
      </div>
      </div>
  )
}

export default Navbar;