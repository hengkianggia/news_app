import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full px-16 pt-10 pb-3 bg-black mt-20">
      <div className="flex justify-between mb-16 text-gray-200">
        <div className="flex gap-x-16 font-Helvetica">
          <div>
            <ul className="flex flex-col gap-y-2  text-gray-400  font-Helvetica">
              <li>
                <a href="#">FIND A STORE</a>
              </li>
              <li>
                <a href="#">BECOME A MEMBER</a>
              </li>
              <li>
                <a href="#">SIGN UP FOR EMAIL</a>
              </li>
              <li>
                <a href="#">STUDENT DISCOUNTS</a>
              </li>
              <li>
                <a href="#">Send Us Feedback</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-y-2 text-gray-400 font-Helvetica">
              <li>
                <a href="#">Contact Us </a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Delivery </a>
              </li>
              <li>
                <a href="#">Returns </a>
              </li>
              <li>
                <a href="#">Payment Options </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-y-2 text-gray-400 font-Helvetica">
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors </a>
              </li>
              <li>
                <a href="#">Sustainability </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-8 text-gray-400 text-[24px]">
          <div>
            <BsTwitter />
          </div>
          <div>
            <BsFacebook />
          </div>
          <div>
            <BsYoutube />
          </div>
          <div>
            <BsInstagram />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between text-gray-400 font-Helvetica">
        <div>
          <a href="#">© 2023 Nike, Inc. All Rights Reserved</a>
        </div>
        <div className="flex gap-x-5">
          <a href="#">Guides</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Nike Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
