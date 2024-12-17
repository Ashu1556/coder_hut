"use client";
import { useState } from 'react';
import Image from 'next/image';
import SeoData from "../assets/SeoPage.jpg"
import Seo from "../../../public/seof.svg"

const page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        services: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                services: checked
                    ? [...prevData.services, value]
                    : prevData.services.filter((service) => service !== value)
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you could make an API call to submit the form data
        // Example:
        // await fetch('/api/submitForm', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData),
        // });
    };

    return (
        
        <div
            className="flex flex-col lg:flex-row items-center"
            style={{ maxHeight: "250vh", width: "100%", backgroundColor: "black", color: "white", justifyContent: "space-evenly" }}
        >
            <div className="flex flex-[0.4] items-center justify-center mb-4 lg:mb-0">
                <Image
                    src={Seo}
                    style={{
                        width: "80%",
                    }}
                    alt="seo image"
                />
            </div>
            <div className="flex flex-[0.4] p-4 flex-col">
                <div className="text-white">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Talk to our experts
                    </h2>
                </div>
                <div className="text-white mt-4 mb-4">
                    <p className="text-sm md:text-base lg:text-lg">
                        Partner with us to embrace 360-degree digital
                    </p>
                    <p className="text-sm md:text-base lg:text-lg">
                        marketing activities to improve your brand value.
                    </p>
                </div>
                <div className="w-full text-white">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* First Row: First Name and Last Name */}
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="flex-[0.4]">
                                <label className="block text-xs md:text-sm font-medium text-white-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-white-300"
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        border: "1px solid white",
                                        padding: "7px",
                                        borderRadius: "5px",
                                    }}
                                    required
                                />
                            </div>
                            <div className="flex-[0.4]">
                                <label className="block text-xs md:text-sm font-medium text-white-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-white-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        border: "1px solid white",
                                        padding: "7px",
                                        borderRadius: "5px",
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        {/* Second Row: Email */}
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-white-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border-white-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "1px solid white",
                                    padding: "7px",
                                    borderRadius: "5px",
                                }}
                                required
                            />
                        </div>

                        {/* Third Row: Message Box */}
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-white-700">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Please add a message"
                                rows="4"
                                className="mt-1 block w-full border-white-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "1px solid white",
                                    padding: "7px",
                                    borderRadius: "5px",
                                }}
                                required
                            />
                        </div>

                        {/* Fourth Row: Service Checkboxes */}
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-white-700">Services</label>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {["Website Design", "Digital Marketing", "App Design", "Cloud Service", "Consulting", "EX Design"].map(
                                    (service) => (
                                        <div key={service} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={service}
                                                name="services"
                                                value={service}
                                                checked={formData.services.includes(service)}
                                                onChange={handleChange}
                                                className="text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                style={{
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    border: "1px solid white",
                                                    padding: "7px",
                                                    borderRadius: "5px",
                                                }}
                                            />
                                            <label htmlFor={service} className="ml-2 text-xs md:text-sm lg:text-base">
                                                {service}
                                            </label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Get Started Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#263050] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm md:text-base lg:text-lg"
                                style={{
                                    width: "100%",
                                    border: "1px solid white",
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default page
