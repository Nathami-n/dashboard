import Navbar from "@/components/dashboard/navbar/sidebar";
import SideBar from "@/components/dashboard/sidebar/sidebar";

const DashBoardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}


export default DashBoardLayout;