import React from 'react'
import Image from 'next/image';
import OurService from "../assets/OurService.jpg"
import ServiceIcon from "../../../public/serviceIcon.svg"
import lastService from "../../../public/lastServiceIcon.svg"
import "./Service.css";

const page = () => {

    const uiData = [
        {
            id: "1",
            smallerHeaderText: "Design",
            headerText: "Stunning Visual Designs that Boost Your Conversion Rate",
            subParagraphtext: "We Bring Your Ideas and Designs to Life",
            paragraphText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            image: "",
            lastParagraph: "Your product idea",
            icon: lastService,
            childrenData: [
                { id: "1", paragraphText: "UI\UX Design", icon: ServiceIcon },
                { id: "2", paragraphText: "Web Design", icon: ServiceIcon },
                { id: "3", paragraphText: "App Design", icon: ServiceIcon },

            ]
        },
        {
            id: "2",
            smallerHeaderText: "Devlopment",
            headerText: "Stunning Visual Designs that Boost Your Conversion Rate",
            subParagraphtext: "We Bring Your Ideas and Designs to Life",
            paragraphText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            image: "",
            lastParagraph: "Your product idea",
            icon: lastService,
            childrenData: [
                { id: "1", paragraphText: "UI\UX Design", icon: ServiceIcon },
                { id: "2", paragraphText: "Web Design", icon: ServiceIcon },
                { id: "3", paragraphText: "App Design", icon: ServiceIcon },

            ]
        },
        {
            id: "3",
            smallerHeaderText: "Digital Marketing",
            headerText: "Better Performance Provides that Boost Your Conversion Rate",
            subParagraphtext: "Get Online Success Marketing With Us",
            paragraphText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            image: "",
            lastParagraph: "Your product idea",
            icon: lastService,
            childrenData: [
                { id: "1", paragraphText: "UI\UX Design", icon: ServiceIcon },
                { id: "2", paragraphText: "Web Design", icon: ServiceIcon },
                { id: "3", paragraphText: "App Design", icon: ServiceIcon },

            ]
        },
        {
            id: "4",
            smallerHeaderText: "Cloud Services",
            headerText: "Stunning Visual Designs that Boost Your Conversion Rate",
            subParagraphtext: "We Bring Your Ideas and Designs to Life",
            paragraphText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            image: "",
            lastParagraph: "Your product idea",
            icon: lastService,
            childrenData: [
                { id: "1", paragraphText: "UI\UX Design", icon: ServiceIcon },
                { id: "2", paragraphText: "Web Design", icon: ServiceIcon },
                { id: "3", paragraphText: "App Design", icon: ServiceIcon },

            ]
        }
    ];

    return (
        <div
            className='bg-black '
            style={{
                width: "100%",
                maxHeight: "400vh",
            }}>

            <div
                className="w-full h-[20vh] sm:h-[25vh]  lg:h-[60vh] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-end"
                style={{
                    backgroundImage: `url(${OurService.src})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className='flex  justify-end'
                    style={{
                        width: "40%",
                        marginRight: "8%"
                    }}
                >
                    <div className="flex flex-col flex-[1.0] items-center  sm:items-start  ">
                        <h1 className="text-white text-lg sm:text-3xl md:text-4xl "
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                width: "100%"
                            }}
                        >
                            How we works
                        </h1>

                        <p className="text-white text-[11px] sm:text-base md:text-lg lg:text-xl leading-relaxed mt-[2px] sm:mt-8 "
                            style={{
                                textAlign: "justify"
                            }}
                        >
                            we’ve been at the forefront of IT staffing and consulting, providing agile, reliable, and tailored solutions to meet the ever-evolving needs of our clients.
                        </p>
                    </div>
                </div>

            </div>

            <div className="intro-section">
                {uiData.map((item, index) => (
                    <div key={item.id}
                        className={`intro-card`}

                        style={{
                            flexDirection: (item.id === "1" || item.id === "3") ? "row" : "row-reverse"
                        }}
                    >
                        <div className="intro-card-content">
                            <h2 className="header-text" data-content={item.smallerHeaderText}>
                                {item.smallerHeaderText}
                            </h2>
                            <h3
                                className="smaller-header"

                            >{item.headerText}</h3>
                            <p className="paragraph-text">{item.paragraphText}</p>
                            <h3
                                className="smaller-header"

                            >{item.subParagraphtext}</h3>
                            <div className='flex flex-col childrenData'>
                                {
                                    item.childrenData?.map((item1) => (
                                        <div className='flex flex-row justify-between childrenitem'>
                                            <p>
                                                {item1.paragraphText}
                                            </p>
                                            <Image
                                                src={item1.icon}
                                                alt="icon_image"
                                            />
                                        </div>
                                    ))
                                }

                            </div>
                            <div className='flex flex-row'>
                                <button>
                                    {item.lastParagraph}
                                </button>
                                <Image
                                    src={item.icon}
                                    alt="icon_image"
                                />

                            </div>
                        </div>
                        <div className="intro-card-image">
                            <Image src={item.image} alt={item.smallerHeaderText} />
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default page
