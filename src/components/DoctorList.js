import { extractPhone } from '@/app/utils/extractPhone';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function DoctorList({doctors}) {
  return (
    <div>
      {doctors?.map((doc, i) => (
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
            className="rounded-full max-h-[150px]"
          />
          <div className="">
            <h3 className="font-bold text-lg">{doc?.doctorName}</h3>
            <p>{doc.cities}</p>
            <p>{doc.specialty}</p>
            <p>{doc.workplace}</p>
          </div>
        </div>
        <div className="text-right gap-y-2 space-y-2 w-2/5">
          <p className="font-bold text-lg">{extractPhone(doc?.chambers)}</p>
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
    </div>
  );
}
