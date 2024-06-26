"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import axios from "axios";
import { newRequest } from "../utils/newRequest";
import SEO from "@/components/SEO";
import Link from "next/link";
import { extractPhone } from "../utils/extractPhone";
import DoctorList from "@/components/DoctorList";

<SEO
    title="Home | All doctors of bangladesh"
    description="This is the home page of doctorsbd where all doctors are listed by city, hospitals and specialty"
    keywords="doctors, doctorbd, hospital, doctors in bd, chittagong, dhaka"
    url={"doctorbd.net"}
    image={"../../../public/next.svg"}
    twitterUsername={"@hamidthedev"}
/>;

const Home = () => {
    const [city, setCity] = useState([]);
    const [hospital, setHospital] = useState([]);
    const [speciality, setSpeciality] = useState([]);

    const [doctors, setDoctors] = useState([]);
    const [top, setTop] = useState([]);

    const [c, setC] = useState("");
    const [h, setH] = useState("");
    useEffect(() => {
        newRequest.get("cities").then((res) => setCity(res?.data));
        newRequest.get("top").then((res) => setTop(res?.data));
    }, []);

    const cities = (city) => {
        setC(city);
        axios
            .get(`https://doctorbd-server.vercel.app/hospitals/${city}`)
            .then((res) => setHospital(res.data));
    };

    const hospitals = (hospital) => {
        setH(hospital);
        axios
            .get(
                `https://doctorbd-server.vercel.app/specialties/${c}/${hospital}`
            )
            .then((res) => setSpeciality(res.data));
    };

    const specialities = (Specialty) => {
        const queryURL = `doctors?city=${encodeURIComponent(
            c
        )}&hospital=${encodeURIComponent(h)}&specialty=${encodeURIComponent(
            Specialty
        )}`;

        console.log(queryURL);
        newRequest.get(queryURL).then((res) => setDoctors(res.data));
        console.log(doctors);
    };

    return (
        <main className="bg-white pb-10">
            <div className={`homebg h-fit py-14 `}>
                <div className="filter-bar flex flex-col justify-center items-center gap-7 ">
                    <h1 className='lg:text-5xl text-3xl text-white font-bold font-["Libre Baskerville,Arial,Helvetica,sans-serif"] flex flex-col items-center gap-3 '>
                        <span>Search Top Doctors.</span>{" "}
                        <span>Find Trusted Care</span>
                    </h1>
                    <div className="lg:h-20 md:h-30 sm:h-30 h-30 w-9/12 rounded-lg bg-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center p-5">
                        <div>
                            <Dropdown
                                title="Select Location"
                                setValue={cities}
                                options={city}
                            />
                        </div>
                        <div>
                            <Dropdown
                                title="Select Hospital"
                                setValue={hospitals}
                                options={hospital}
                            />
                        </div>
                        <div>
                            <Dropdown
                                title="Select Speciality"
                                setValue={specialities}
                                options={speciality}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* top */}
            <div id="top" className="bg-slate-50 px-14">
                <h1 className="text-3xl font-semibold text-zinc-800 py-10">
                    {doctors.length > 0
                        ? `Doctors found ${doctors.length}`
                        : "Top Doctors in Bangladesh"}
                </h1>

                {doctors.map((doc, i) => (
                    <div
                        key={i}
                        className="doctor bg-white px-3 py-3 border-t-2 border-b-4 border-b-green-600 flex lg:flex-row md:flex-row flex-col items-center justify-between "
                    >
                        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-5">
                            <Image
                                width={150}
                                height={150}
                                src={doc.profileImg}
                                alt="doctor"
                                className="rounded-full max-h-[150px] ring-4 ring-green-600"
                            />
                            <div className=" lg:text-left md:text-left text-center mb-5">
                                <h3 className="font-bold text-lg">
                                    {doc?.doctorName}
                                </h3>
                                <p className="font-semibold mt-4">
                                    City: {doc.cities}
                                </p>
                                <p>{doc.specialty}</p>
                                <p>{doc.workplace}</p>
                            </div>
                        </div>
                        <div className="text-right gap-y-2 space-y-2 w-2/5 ">
                            <p className="lg:font-bold md:font-bold font-semibold lg:text-lg md:text-text-base text-sm">
                                {extractPhone(doctors.chambers)}
                            </p>
                            <p>
                                <Link
                                    href={`/details/${doc._id}`}
                                    className="py-2 lg:px-5 md:px-4 px-3 bg-green-500 text-white font-semibold  rounded-sm lg:text-[18px] md:text-[16px] text-[10px]"
                                >
                                    VIEW PROFILE
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
                {doctors.length === 0 ? <DoctorList doctors={top} /> : <></>}
            </div>
        </main>
    );
};

export default Home;
