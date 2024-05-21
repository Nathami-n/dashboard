'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


interface ICustomLinkProps {
    item: {
        title: string;
        path: string;
        icon: JSX.Element
    }
}

const CustomLink: React.FC<ICustomLinkProps> = ({item}) => {
    const pathname = usePathname();
    return (
        <Link 
        href={item.path}
        className={`flex p-5 items-center gap-2 hover:bg-[#2e374a] transition-all ${ pathname === item.path ? "bg-[#2e374a]" : " "} `}
        >
        {item.icon}
        {item.title}
        </Link>
    )
}


export default CustomLink;