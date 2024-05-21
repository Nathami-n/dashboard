import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Image from "next/image";
import CustomLink from '@/components/dashboard/sidebar/custom-link';
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className="sticky top-10">
      {/* user */}
      <div className="flex  items-center gap-5 mb-5">
        <Image
         className=" rounded-full object-cover"
         src={"/avatar.jpeg"}
         width={30}
         height={30}
         alt="User Profile"
        />
        <div className="flex flex-col">
          <span className="font-medium"> Hi User</span>
          <span className="text-xs">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => {
          return (
            <li
             key={category.title} 
            className="list-none "
            >
              <span className="font-semibold my-2">{category.title}</span>
              {category.list.map((item) => (
                <CustomLink item={item} key={item.title}/>
              ))}
            </li>
          )
        })}
      </ul>

      <button className="p-5 my-[5px] flex items-center gap-2 cursor-pointer rounded-md bg-none border-none outline-none w-full hover:bg-[#2e374a]">
        <MdLogout/>
        Logout
      </button>
      </div>
  )
}

export default SideBar;