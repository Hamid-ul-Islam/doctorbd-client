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

<SEO title="Home | All doctors of bangladesh" description="This is the home page of doctorsbd where all doctors are listed by city, hospitals and specialty" keywords="doctors, doctorbd, hospital, doctors in bd, chittagong, dhaka" url={"doctorbd.net"} image={"../../../public/next.svg"} twitterUsername={"@hamidthedev"} />

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
      .get(`https://doctorbd-server.onrender.com/hospitals/${city}`)
      .then((res) => setHospital(res.data));
  };

  const hospitals = (hospital) => {
    setH(hospital);
    axios
      .get(`https://doctorbd-server.onrender.com/specialties/${c}/${hospital}`)
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
      <div className='h-fit py-14 bg-cover bg-bottom  bg-[url("https://cdn.castleconnolly.com/dims4/default/1e1c439/2147483647/strip/true/crop/1440x650+0+0/resize/1440x650!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.us-east-1.amazonaws.com%2Faa%2F16%2Fd73bb3e947d099a08fe071ef4c78%2Fhomepage-gold.jpg")] bg-no-repeat '>
        <div className="filter-bar flex flex-col justify-center items-center gap-7 ">
          <h1 className='text-5xl text-white font-bold font-["Libre Baskerville,Arial,Helvetica,sans-serif"]'>
            Search Top Doctors. Find Trusted Care
          </h1>
          <div className="h-20 w-9/12 rounded-lg bg-white flex px-10 justify-between items-center">
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
            : "Top Doctor in Bangladesh"}
        </h1>

        {doctors.map((doc, i) => (
          <div
            key={i}
            className="doctor bg-white px-3 py-3 border-t-2 border-b-4 border-b-green-600 flex justify-between items-center"
          >
            <div className="flex gap-5">
              <Image
                width={150}
                height={150}
                src={doc.profileImg}
                alt="doctor"
                className="rounded-full max-h-[150px] ring-4 ring-green-600"
              />
              <div className="">
                <h3 className="font-bold text-lg">{doc?.doctorName}</h3>
                <p>{doc.cities}</p>
                <p>{doc.specialty}</p>
                <p>{doc.workplace}</p>
              </div>
            </div>
            <div className="text-right gap-y-2 space-y-2 w-2/5">
              <p className="font-bold text-lg">
                {extractPhone(doctors.chambers)}
              </p>
              <p>
                <Link
                  href={`/details/${doc._id}`}
                  className="py-2 px-5 bg-green-500 text-white font-semibold rounded-sm"
                >
                  VIEW PROFILE
                </Link>
              </p>
            </div>
          </div>
        ))}
        {doctors.length === 0 ? (
          <DoctorList doctors={top} />
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default Home;
