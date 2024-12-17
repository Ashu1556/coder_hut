import React from 'react';
import Image from 'next/image';
import './Introsection.css';
import AboutBackground from "../assets/AboutPageBackground.png";
import AfterBackground1 from "../assets/AfterBackground1.png";
import Dream from "../assets/DreamOppurtunity.png";
import Business from "../assets/Businesset.jpg";
import Expore from "../assets/Explore_ooprtunity.jpg";

const Page = () => {

    const uiData = [
        {
            id: "1",
            smallerHeaderText: "Business Ethics",
            headerText: "We believe in business with integrity",
            paragraphText:
                "A finely articulated code of Business Conduct helps us achieve the highest levels of transparency and propriety, thus strengthening the foundations of our business.",
            image: Business,
        },
        {
            id: "2",
            smallerHeaderText: "Employee Benefits",
            headerText: "Explore opportunities",
            paragraphText:
                "A career at Coderhrt means a life-long opportunity to explore your full potential, grow continuously, and work on the latest technologies alongside the finest minds in the industry. An inspiring combination of growth prospects, continuous innovation, fair play, and a great work culture makes Wipro an exhilarating workplace. All Wiproites can expect a bouquet of benefits as they walk in to discover a career for life.",
            image: Expore,
        },
        {
            id: "3",
            smallerHeaderText: "Equal Opportunities",
            headerText: "Making sure that every dream has a place to bloom",
            paragraphText:
                "applicants are considered for employment solely on the basis of qualifications and competencies. As an employee, you will enjoy equal opportunity in all aspects of employment, including recruitment, training conditions of service, and career progression. Furthermore, we are committed to maintaining a workplace where each employee's privacy and personal dignity are respected and protected from offensive or threatening behavior, including violence and sexual harassment.",
            image: Dream,
        },
    ];
    return (
        <div
            className='bg-black '
            style={{
                width: "100%",
                maxHeight: "350vh",
            }}
        >
            {/* <div
                style={{
                    backgroundImage: `url(${AboutBackground.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    justifyContent: "space-evenly"
                }}
                className="flex items-center h-[20rem] sm:h-[25rem] md:h-[27rem]"
            >
                <div className='flex flex-col flex-[0.5] '>
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl">Why Coder-HRT</h1>

                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center sm:text-left"
                        style={{
                            width: "50%",
                            marginTop: "2rem",
                            textAlign: "justify"
                        }}
                    >
                        At Coder-HRT, we prioritize collaboration and transparency, ensuring your vision comes to life. Partner with us to navigate the digital landscape and achieve your goals!
                    </p>

                </div>

                <div className='flex-[0.2]'>
                    <Image
                        src={AfterBackground1}
                        alt="about page"
                        style={{
                            width: "100%",
                            borderRadius: "50%"
                        }}

                    />

                </div>
            </div> */}

            <div
                style={{
                    backgroundImage: `url(${AboutBackground.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    justifyContent: "space-evenly",
                    padding:"16px"
                }}
                className="flex flex-row items-center   h-[17vh] sm:h-[25vh] lg:h-[50vh]"
            >
                <div className="flex flex-col flex-[0.7] items-center sm:items-start text-center sm:text-left p-12">
                    <h1 className="text-white text-lg sm:text-3xl md:text-4xl "

                    >
                        Why Coder-HRT
                    </h1>

                    <p className="text-white text-[10px] sm:text-base md:text-lg lg:text-xl leading-relaxed  sm:mt-8 w-[100%] sm:w-[50%]"
                        style={{
                            textAlign: "justify"
                        }}
                    >
                        At Coder-HRT, we prioritize collaboration and transparency, ensuring your vision comes to life. Partner with us to navigate the digital landscape and achieve your goals!
                    </p>
                </div>

                <div className="flex-[0.3] mt-4 sm:mt-0">
                    <Image
                        src={AfterBackground1}
                        alt="about page"
                        style={{
                            width: "100%", // Reduced width for better fit on mobile
                            maxWidth: "250px", // Constrained maximum width for larger screens
                            borderRadius: "50%"
                        }}
                        className="mx-auto sm:mx-0"
                    />
                </div>
            </div>


            {/* <div className="intro-section">
                <div className="heading-container">
                    <h1 className="heading">
                        Here Coder-HRT, We are proud to be an organisation that takes pride in its workforce
                    </h1>
                </div>
               
            </div> */}


            {/* <p className="paragraph">
                    Welcome to Coder-HRT, a leading software development agency. Our team of expert developers
                    and designers is dedicated to delivering innovative solutions tailored to your needs.
                    Whether you’re looking to enhance your cloud-based products, develop custom applications,
                    or improve your online presence, we’re here to help. At Coder-HRT, we prioritize collaboration
                    and transparency, ensuring your vision comes to life. Partner with us to navigate the digital
                    landscape and achieve your goals!
                </p> */}


            <div className="intro-section">
                {uiData.map((item, index) => (
                    <div key={item.id}
                        className={`intro-card`}

                        style={{
                            flexDirection: (item.id === "1" || item.id === "3") ? "row" : "row-reverse"
                        }}
                    >
                        <div className="intro-card-content">
                            <h3 className="smaller-header" data-content={item.smallerHeaderText}>{item.smallerHeaderText}</h3>
                            <h2
                                className="header-text"

                            >{item.headerText}</h2>
                            <p className="paragraph-text">{item.paragraphText}</p>
                        </div>
                        <div className="intro-card-image">
                            <Image src={item.image} alt={item.smallerHeaderText} />
                        </div>
                    </div>
                ))}
            </div>

            <div>

            </div>
        </div>
    );
};




export default Page;
