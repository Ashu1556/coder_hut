"use client";

import React from 'react';
import Facebook from "../assets/facebook.svg";
import Google from "../assets/google.svg";
import Instagram from "../assets/Instagram.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import { RiWhatsappLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {

    const  [locationData , setLocationData] = React.useState("");

    const locationName = window.location.href;

    const destruct_locationname = locationName && locationName.split('/');

    React.useEffect(() =>{
           if(destruct_locationname){
            const Name = destruct_locationname[destruct_locationname.length - 1];
            setLocationData(Name);
           }
    },[locationName, locationData])

    



    const CompanyData = [
        { id: "1", text: "About us" },
        { id: "2", text: "Our Service" },
        { id: "3", text: "Portfolio" },
        { id: "4", text: "Contact Us" }
    ];

    const ServiceData = [
        { id: "1", text: "Digital Marketing" },
        { id: "2", text: "Website Design & Development" },
        { id: "3", text: "Web Application" },
        { id: "4", text: "Brand Management" }
    ];

    const footerUiData = [
        {
            id: "1",
            Name: "Address",
            childrenData: [
                { id: "1", text: "H25, 2nd Floor, Noida Sec 63", text1: "Near jeep showroom,", text2: "Uttar Pradesh, 201301, India", bulletPoints: true },
            ]
        },
        {
            id: "2",
            Name: "Phone",
            childrenData: [
                { id: "1", text: "+91 7870913698", bulletPoints: false }
            ]
        },
        {
            id: "3",
            Name: "Email",
            childrenData: [
                { id: "1", text: "info@coderhrt.com", bulletPoints: false }
            ]
        },
        {
            id: "4",
            Name: "Social",
            childrenData: [
                { id: "1", icon: <SlSocialFacebook color="white" size="24" /> },
                { id: "2", icon: <AiFillInstagram color="white" size="24" /> },
                { id: "3", icon: <RiWhatsappLine color="white" size="24" /> },
                { id: "4", icon: <FaGoogle color="white" size="24" /> }
            ]
        }
    ];

    return (
        <div className="w-full bg-[#ECEEF4] "
            style={{
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px"
            }}
        >
            <div className="flex flex-col items-center p-[4%] gap-14">
                {
                    locationData && (locationData === "About" || locationData === "Service") ? (<>

                    </>) : <div className="flex flex-row justify-between md:justify-around w-full">
                        <div className="flex flex-col flex-[0.9] gap-4 md:gap-8">
                            <h2 className="text-[#546DA6] text-[12px] md:text-[32px]">CODER-HRT</h2>
                            <div className="flex flex-col gap-4 md:gap-6 text-[#546DA6] text-[6px] md:text-[16px]">
                                <p>At Coder-HRT, a leading software development agency with over 5+ years of experience. Our team of expert developers and designers is dedicated to delivering innovative solutions tailored to your needs. Whether you’re looking to enhance your cloud-based products, develop custom applications, or improve your online presence, we’re here to help</p>
                                <p>At Coder-HRT, we prioritize collaboration and transparency, ensuring your vision comes to life. Partner with us to navigate the digital landscape and achieve your goals!</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col gap-4 md:gap-6">
                                <h2 className="text-[#546DA6] text-[12px] md:text-[32px]">COMPANY</h2>
                                <div className="flex flex-col gap-4">
                                    {CompanyData.map((item) => (
                                        <p key={item.id} className="text-[#546DA6] text-[8px] md:text-[16px]">
                                            {item.text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:gap-6">
                                <h2 className="text-[#546DA6] text-[12px] md:text-[32px]">SERVICE</h2>
                                <div className="flex flex-col gap-4">
                                    {ServiceData.map((item) => (
                                        <p key={item.id} className="text-[#546DA6] text-[8px] md:text-[16px]">
                                            {item.text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }


                <div className="flex flex-row  border border-[#546DA6] w-full md:w-11/12 rounded-md  p-[10px] md:p-4"
                    style={{
                        maxWidth: "97vw"
                    }}
                >
                    {footerUiData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`text-[#546DA6] text-[10px] md:text-[16px] flex flex-col ${index !== footerUiData.length - 1 ? 'border-r border-[#546DA6]' : ''} p-[2px]  md:px-4`}
                            style={{
                                flex: item.id === "1" ? "0.35" : (item.id === "2" || item.id === "3") ? "0.2" : "0.25",
                            }}
                        >
                            <h3 className="font-semibold mb-2 text-[10px] md:text-[1rem]">{item.Name}</h3>
                            <div className={`flex ${item.id === "1" ? 'flex-col' : 'flex-row'} md:gap-2`}>
                                {item.childrenData.map((child) => (
                                    <div key={child.id} className="flex items-center md:gap-2">
                                        {child.bulletPoints ? (
                                            <ul className="list-disc ml-[0.2rem] md:ml-4">
                                                <li>{child.text}</li>
                                                <li>{child.text1}</li>
                                                <li>{child.text2}</li>
                                            </ul>
                                        ) : child.icon ? (
                                            <div className="w-[1.9rem] h-[1.9rem] md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#546DA6]">
                                                {child.icon}
                                            </div>

                                        ) : (
                                            <p className='text-[8px] md:text-[1rem]'>{child.text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
