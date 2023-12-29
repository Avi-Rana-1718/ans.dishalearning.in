import Link from "next/link";

export default function Breadcrumb() {
    return (
        <small className="m-1 text-sm"><Link href="/"><i class="fa-solid fa-house text-[#0D6EFD] m-1"></i></Link><i class="fa-solid fa-chevron-right m-1"></i><Link className="text-[#0D6EFD] hover:underline" href="/answers">Answers</Link></small>
    )
}