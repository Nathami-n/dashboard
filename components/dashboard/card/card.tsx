import { MdSupervisedUserCircle } from "react-icons/md";


const Card = () => {
    return (
        <div className="soft p-5 flex rounded-md gap-5 cursor-pointer">
            <MdSupervisedUserCircle size={24}/>
            <div className="flex flex-col gap-5">
                <span className="">Total Users</span>
                <span className="text-[24px] font-semibold">50.345</span>
                <span className="text-[14px] font-[300px]"><span>60%</span> more than last month</span>
            </div>
        </div>
    )
}

export default Card;