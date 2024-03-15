import { extractPhone } from '@/app/utils/extractPhone';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function DoctorList({ doctors }) {
  return (
    <div>
      {doctors?.map((doc, i) => (
        <div
          key={i}
          className="doctor bg-white px-3 py-3 border-t-2 border-b-4 border-b-green-600 flex lg:flex-row md:flex-row flex-col items-center justify-between "
        >
          <div className="flex lg:flex-row md:flex-row flex-col items-center gap-5 ">
            <Image
              width={150}
              height={150}
              src={doc.profileImg}
              alt="doctor"
              className="rounded-full max-h-[150px]"
            />
            <div className="lg:text-left md:text-left text-center mb-5">
              <h3 className="font-bold text-lg">{doc?.doctorName}</h3>
              <p className='font-semibold mt-4'>City: {doc.cities}</p>
              <p>{doc.specialty}</p>
              <p>{doc.workplace}</p>
            </div>
          </div>
          <div className="text-right gap-y-2 space-y-2 w-2/5 my-2">
            <p className="lg:font-bold md:font-bold font-semibold lg:text-lg md:text-text-base text-sm lg:w-full w-[127px] ">{extractPhone(doc?.chambers)}</p>
            <p className=''>
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
    </div>
  );
}
