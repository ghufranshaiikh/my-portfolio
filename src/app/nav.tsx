import Link from "next/link"
import { LiaDownloadSolid } from "react-icons/lia";

export default function Nav () {
    return (
        <div className="flex justify-between items-center px-20 py-5 bg-indigo-300 ">
        <h1 className='text-3xl font-extrabold'>Portfolio</h1>
        <ul className="flex gap-x-4">
         <li className="hover:text-blue-950 font-medium "><Link className="hover:underline text-blue-950" href="#">Home</Link></li>
         <li className="hover:text-blue-950 font-medium "><Link className="hover:underline text-blue-950" href="#">About</Link></li>
         <li className="hover:text-blue-950 font-medium "><Link className="hover:underline text-blue-950" href="#">Skills</Link></li>
         <li className="hover:text-blue-950 font-medium "><Link className="hover:underline text-blue-950" href="#">Projects</Link></li>
         <li className="hover:text-blue-950 font-medium "><Link className="hover:underline text-blue-950" href="#">Contact</Link></li>
        </ul>
        <a href="/assest/cv/my-resume.pdf" target="_blank">
        <button className=" flex border bg-gray-200 px-3 py-1 items-center text-black rounded-lg font-medium ">
            Downdload CV<LiaDownloadSolid/></button>
            </a> 
       </div>
    )
}