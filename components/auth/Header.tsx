import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets:["latin"],
    weight: "600"
})

interface IHeaderProps {
    text: string;
}
 export const Header: React.FC<IHeaderProps> = ({
    text
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
        <h1 className={cn(
            "text-3xl font-semibold text-blue-500",
            font.className
        )}>
            Student<span className="text-rose-500">Me.</span>
        </h1>
        <p className="text-muted-foreground text-small">
            {text}
        </p>
    </div>
  )
}
