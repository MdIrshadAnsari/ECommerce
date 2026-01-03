import React from "react";
import Subscribe from "../Home/Subscribe";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="ml-50 mr-50 w-[80%] flex border-t-1 border-zinc-300">
      <div className="mt-10 w-full">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl text-zinc-500 text-center">
              CONTACT <span className="text-black">US</span>
            </h1>
            <hr className="w-8 ml-3 border-1" />
          </div>
          <div className="flex gap-10 mt-10 justify-center">
            <div>
              <img
                className="w-[27vw] h-[60vh]"
                src="https://foreverbuy.in/assets/contact_img-CyOum2vk.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-zinc-600 mt-10 text-xl font-semibold">
                Our Store
              </h1>
              <p className="text-zinc-600 mt-5">
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </p>
              <p className="mt-5 text-zinc-500">Tel: (415) 555-0132</p>
              <p className="text-zinc-500">Email: admin@ecommerce.com</p>
            </div>
          </div>
        </div>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
