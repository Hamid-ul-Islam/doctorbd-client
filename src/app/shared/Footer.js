import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" mx-auto [7%] bg-black p-10 border-t-2 text-white">
      <div className="flex gap-4 items-center justify-between">
        <div>
          <h1 className=" lg:text-4xl md:text-3xl text-xl text-defaultText font-bold text-white">
            DoctorBD
          </h1>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/doctorbd21/">
              <FaFacebook className="text-white lg:text-3xl md:text-2xl text-xl" />
            </Link>
            <Link href="https://www.instagram.com/doctorbd633/">
              <FaInstagram className="text-white lg:text-3xl md:text-2xl text-xl" />
            </Link>
            <Link href="https://www.instagram.com/doctorbd633/">
              <BsTwitterX className="text-white lg:text-3xl md:text-2xl text-xl" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="lg:text-4xl md:text-3xl text-xl text-white font-bold mb-4">Top Best Doctors</h1>
          <div className="">
            <div className="">
              <ul className="flex flex-col gap-2">
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    Dr Mohammad hamid
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    Dr Sohan
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    Dr rohim udden
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    Dr Mohammad hamid
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div className="">
              <ul className="flex flex-col gap-2">
                <h1 className="lg:text-4xl md:text-3xl text-xl text-white font-bold mb-4">
                  Privacy Policy
                </h1>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    Privacy policy
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    Terms and conditions
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    advertisement
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-semibold hover:text-green-600 ">
                    hospitals
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
