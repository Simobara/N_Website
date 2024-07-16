"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../../../public/images/MYLOGO1.png';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-black">
      <div className="container p-12 flex justify-between items-center">
        <span>
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </span>
        <p className="text-slate-600">&copy; {year} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
