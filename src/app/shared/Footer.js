import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" mx-auto [7%] bg-black p-10 border-t-2 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl text-defaultText font-bold text-white">
            DoctorBD
          </h1>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/profile.php?id=61557188582745">
              <FaFacebook className="text-white text-3xl" />
            </Link>
            <Link href="https://www.instagram.com/doctorbd633/">
              <FaInstagram className="text-white text-3xl" />
            </Link>
            <Link href="https://www.instagram.com/doctorbd633/">
              <BsTwitterX className="text-white text-3xl" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-white font-bold">Top Best Doctors</h1>
          <div className="">
            <div className="">
              <ul className="flex flex-col gap-2">
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
                    Dr Mohammad hamid
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
                    Dr Sohan
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
                    Dr rohim udden
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
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
                <h1 className="text-4xl text-white font-bold">
                  Privacy Policy
                </h1>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
                    Privacy policy
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
                    Terms and conditions
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
                    advertisement
                  </li>
                </Link>
                <Link href="#">
                  <li className="text-sm font-bold hover:text-white ">
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
