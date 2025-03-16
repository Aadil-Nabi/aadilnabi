import {Cards} from "@/components/cards";
import Link from "next/link";

export default function Notifications(){
    return(
        <div>
            <Cards>Notifications<Link href={"/dashboard/archived"} className="bg-black rounded-lg text-white p-2">Archived</Link></Cards>
        </div>

    )
}