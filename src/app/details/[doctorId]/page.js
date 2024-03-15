import { extractPhone } from "@/app/utils/extractPhone";
import { formatChambers } from "@/app/utils/formatChambers";
import { newRequest } from "@/app/utils/newRequest";
import SEO from "@/components/SEO";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

<SEO
  title="Home | All doctors of bangladesh"
  description="This is the home page of doctorsbd where all doctors are listed by city, hospitals and specialty"
  keywords="doctors, doctorbd, hospital, doctors in bd, chittagong, dhaka"
  url={"doctorbd.net"}
  image={"../../../public/next.svg"}
  twitterUsername={"@hamidthedev"}
/>;

const Details = async ({ params }) => {
  const { doctorId } = params;
  const doctor = await axios
    .get(`https://doctorbd-server.onrender.com/doctor/${doctorId}`)
    .then((res) => res.data);

  const related = await axios.get(
    `https://doctorbd-server.onrender.com/doctors/?city=${doctor.cities}&specialty=${doctor.specialty}`
  ).then(res=>res.data);
  <SEO
    title={`profile of ${doctor.doctorName}`}
    description={`${doctor.about}`}
    keywords="doctors, doctorbd, hospital, doctors in bd, chittagong, dhaka"
    url={"doctorbd.net"}
    image={"../../../public/next.svg"}
    twitterUsername={"@hamidthedev"}
  />;

  console.log(related);

  return (
    <div className="bg-gray-100 h-full pb-10">
      <div className=" bg-black pb-20 pt-9">
        <div className=" flex flex-row items-center justify-between rounded p-3 h-[200px] w-[80%] mx-auto ">
          <div className="">
            <div className="flex items-center justify-between gap-5">
              <div>
                <Image
                  width={300}
                  height={300}
                  src={doctor.profileImg}
                  alt={doctor.doctorName}
                  className="lg:h-[200px] md:h-[200px] h-[100px] lg:w-[200px] md:w-[200px] w-[150px] rounded-full border-4 border-green-600"
                ></Image>
              </div>
              <div className="text-white">
                <h1 className="lg:font-bold md:font-bold font-semibold lg:text-3xl md:text-2xl text-xl">{doctor.doctorName}</h1>
                <p className="lg:text-lg md:text-sm text-xs font-bold">{doctor.cities}</p>
                <p className="lg:text-lg md:text-sm text-xs font-bold">{doctor.specialty} </p>
                <p className="lg:text-lg md:text-sm text-xs font-bold">{doctor.workplace}</p>
              </div>
            </div>
          </div>
          <div className="text-right lg:block md:hidden hidden">
            <h4 className=" text-sm text-white">Enhance Profile</h4>
            <p className=" font-bold text-white my-1 text-2xl">
              {extractPhone(doctor?.chambers)}
            </p>
            <Link href="#">
              <button className="bg-gradient-to-r from-[#5ebc69] to-[#42a3a7] px-3 py-2 rounded text-white">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center lg:hidden md:block block">
          <h4 className=" text-sm text-white">Enhance Profile</h4>
          <p className=" font-bold text-white my-1 lg:text-2xl md:text-2xl text-xl ">
            {extractPhone(doctor?.chambers)}
          </p>
          <Link href="#">
            <button className="bg-gradient-to-r from-[#5ebc69] to-[#42a3a7] px-3 py-2 rounded text-white">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[-50px] bg-white p-20 rounded">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-defaultText lg:text-3xl md:text-2xl text-xl font-bold mb-3">About</h1>
            <p className="lg:text-lg md:text-[17px] text-[14px]">{doctor.about}</p>
          </div>
          <div>
            <h1 className="text-defaultText lg:text-3xl md:text-2xl text-xl font-bold mb-3">
              Chamber
            </h1>
            <p className="lg:text-lg md:text-[17px] text-[14px]">{formatChambers(doctor.chambers)}</p>
          </div>
          <div>
            <h1 className="text-defaultText lg:text-3xl md:text-2xl text-xl font-bold mb-3">
              Education
            </h1>
            <p className="lg:text-lg md:text-[17px] text-[14px]">{doctor.degree}</p>
          </div>
        </div>

        {related.length> 0 &&<div className="mt-20">
          <h1 className=" lg:text-3xl md:text-2xl text-xl font-bold">
            Other <i className="font-light lg:text-lg md:text-[17px] text-[14px]">{doctor.specialty}</i> <p className="lg:text-lg md:text-[17px] text-[14px]">Specialist in</p> {" "}
            <i className="font-light lg:text-lg md:text-[17px] text-[14px]">{doctor.cities}</i>
          </h1>
         
        </div>}
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 my-4 lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        {related.length > 0 ? related.map((r,i) => <div key={i} className=" flex items-center justify-between border-4 border-[#5ebc69] p-3 m-2 ">
          <div className="flex items-center gap-3">
            <div>
              <Image
                width={150}
                height={150}
                src={r.profileImg}
                alt="hello"
                className="w-[75px] h-[75px] rounded-full"
              ></Image>
            </div>
            <div>
              <h3 className="text-defaultText font-bold">{r.doctorName}</h3>
              <p className="text-defaultText lg:text-[15px] md:text-[15px] text-[12px] font-semibold">
                {r.cities}
              </p>
              <p className="text-defaultText lg:text-[15px] md:text-[15px] text-[12px] font-semibold my-1">
                {r.specialty}
              </p>
              <p className="text-defaultText lg:text-[15px] md:text-[15px] text-[12px] font-semibold">
                {r.workplace}
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-defaultText font-semibold  text-sm">
              Enhance Profile
            </h4>
            <p className="text-defaultText  font-bold my-1">01888343232</p>
            <Link href="#">
              <button className="bg-gradient-to-r from-[#5ebc69] to-[#42a3a7] px-3 py-1 rounded text-white">
                view Profile
              </button>
            </Link>
          </div>
        </div>) :<></>}
            
           
          </div>
    </div>
  );
};

export default Details;
