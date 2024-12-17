"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter hook
import logo from "../assets/logo.png";
import Image from 'next/image';

const Header = () => {
  const router = useRouter();  // Initialize router
  const [selectedIndex, setSelectedIndex] = useState(null);

  const headerData = [
    { id: "1", text: "Home", route: "/" },
    { id: "2", text: "About", route: "/About" },
    { id: "3", text: "Our Service", route: "/Service" },
    { id: "4", text: "Portfolio", route: "/Portfolio" },
    { id: "5", text: "Contact", route: "/Contact" }
  ];

  return (
    <div className="flex flex-row bg-black justify-between items-center px-4 md:px-8 lg:px-16" style={{ height: "12vh" }}>
      {/* Logo */}
      <div className="flex-[0.2] flex items-center">
        <Image src={logo} alt="coder_logo" className="w-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px]" />
      </div>

      {/* Navigation Links */}
      <div className="flex-[0.6] hidden md:flex items-center gap-4">
        <div className="flex flex-row items-center justify-between w-full text-white rounded-lg border border-[#546DA6] p-1 md:p-2"
        style={{
          borderRadius:"20px"
        }}
        >
          {headerData.map((item, index) => (
            <div
              key={index}
              className={`text-white text-sm md:text-base lg:text-lg flex items-center justify-center rounded-lg transition-all cursor-pointer 
                ${selectedIndex === index ? "bg-[#553C7C] border border-[#546DA6]" : "bg-black"}
              `}
              style={{
                width: "20%",
                height: "5vh",
                borderRadius: selectedIndex === index ? "20px" : "0px"
              }}
              onClick={() => {
                setSelectedIndex(index);
                router.push(item.route);  // Navigate to the selected route
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Get a Quote Button */}
      <div className="flex-[0.2] flex justify-center">
        <button className="text-white bg-[#553C7C]  border-[#546DA6] px-4 py-1 md:px-6 md:py-3 lg:px-6 lg:py-1 text-sm md:text-base lg:text-lg"
        style={{borderRadius:"20px"}}
        >
          Get a quote
        </button>
      </div>
    </div>
  );
}

export default Header;
