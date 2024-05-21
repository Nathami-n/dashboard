import Navbar from "@/components/dashboard/navbar/navbar";
import SideBar from "@/components/dashboard/sidebar/sidebar";

const DashBoardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex">
            <div className="flex-[1] p-6 w-full soft">
                <SideBar/>
            </div>
            <div className="flex-[4] p-5">
                <Navbar/>
                {children}
            </div>
        </div>
    )
}


export default DashBoardLayout;