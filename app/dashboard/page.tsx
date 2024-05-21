import RightBar from "@/components/dashboard/rightbar/rightbar";
import Transactions from "@/components/dashboard/transactions/transactions";
import Card from "@/components/dashboard/card/card";
import Chart from "@/components/dashboard/chart/chart";

const Dashboard = () => {
    return (
        <div className="flex gap-5 mt-5">
            <div className="flex-[3] flex flex-col gap-5">
                <div className=" flex gap-5 justify-between">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions/>
                <Chart/>
        </div>
        <div className="flex-1">
            <RightBar/>
        </div>
        </div>
    )
}



export default Dashboard;