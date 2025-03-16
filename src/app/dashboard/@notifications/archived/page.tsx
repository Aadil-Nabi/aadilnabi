import Link from "next/link";
import {Cards} from "@/components/cards";

export default function ArchivedNotificationsPage() {
    return(
        <>
            <Cards>Archived Notifications<Link href={"/dashboard"} >Default</Link></Cards>

        </>

    )
}