import Image from "next/image"


const Transactions = () => {
    return (
        <div className="p-5 soft rounded-md">
            <h2 className="mb-5 font-[200]">Latest Dealings</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           <div className="flex gap-2 items-center">
                           <Image
                            src="/avatar.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                        Nathan George
                           </div>
                        </td>
                        <td>
                            <span className="base bg-[#f7cb7375]">Pending</span>
                        </td>
                        <td>13.5.2003</td>
                        <td>$600</td>
                    </tr>
                    <tr>
                        <td>
                        <div className="flex gap-2 items-center">
                           <Image
                            src="/avatar.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                        Nathan George
                           </div>
                        </td>
                        <td>
                            <span className="base bg-[#f7cb7375]">Pending</span>
                        </td>
                        <td>13.5.2003</td>
                        <td>$600</td>
                    </tr>
                    <tr>
                        <td>
                        <div className="flex gap-2 items-center">
                           <Image
                            src="/avatar.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                        Nathan George
                           </div>
                        </td>
                        <td>
                            <span className="base bg-[#afd6ee75]">Done</span>
                        </td>
                        <td>13.5.2003</td>
                        <td>$600</td>
                    </tr>
                    <tr>
                        <td>
                        <div className="flex gap-2 items-center">
                           <Image
                            src="/avatar.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                        Nathan George
                           </div>
                        </td>
                        <td>
                            <span className="base bg-[#f7737375]">Cancelled</span>
                        </td>
                        <td>13.5.2003</td>
                        <td>$600</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions