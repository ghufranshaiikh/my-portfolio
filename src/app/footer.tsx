import React from "react";
import Link from "next/link";
import facebook from "../../public/icons/facebook.svg"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-[#3BBA9C] body-font h-52 bg-[#2E3047]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
       
          <Link href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-[#3BBA9C]">
            <span className="ml-3 text-2xl font-extrabold">My Portfolio</span>
        </Link>
        <ul className="text-[#3BBA9C] flex gap-x-3 ">
          <li className="inline-flex">
            <Link href="/about">
              <Link href="about" >About</Link>
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/contact">
              <Link href="contact">Contact</Link>
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/contact">
              <Link href="skill"> Skill</Link>
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/contact">
              <Link href="Project">Project</Link>
            </Link>
          </li>
          <li className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Image src={facebook} alt="facebook icon" ></Image>  
            
          </li>
        </ul>
      </div>
      <p className="text-sm text-black text-center sm:mt-2">
        © 2023 Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

