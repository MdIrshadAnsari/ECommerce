import React from "react";
import Subscribe from "../Home/Subscribe";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="ml-50 mr-50 w-[80%] flex border-t-1 border-zinc-300">
      <div className="mt-10">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl text-zinc-500 text-center">
              ABOUT <span className="text-black">US</span>
            </h1>
            <hr className="w-8 ml-3 border-1" />
          </div>
          <div className="flex gap-10 mt-10">
            <div>
              <img className="w-[25vw] h-[60vh]"
                src="https://foreverbuy.in/assets/about_img-BAJyTXw9.png"
                alt=""
              />
            </div>
            <div className="w-[40%]">
              <p className="text-zinc-600 mt-10">
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes. <p/>
                <br/>
                Since our inception, we've worked
                tirelessly to curate a diverse selection of high-quality
                products that cater to every taste and preference. From fashion
                and beauty to electronics and home essentials, we offer an
                extensive collection sourced from trusted brands and suppliers.
              </p>
              <h1 className="font-semibold mt-5">Our Mission</h1>
              <p className="text-zinc-600 mt-5">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
          </div>
        </div>

        <div className="mt-15">
           <div className="flex items-center">
            <h1 className="text-2xl text-zinc-500 text-center">
              WHY <span className="text-black">CHOOSE US</span>
            </h1>
            <hr className="w-8 ml-3 border-1" />
          </div>
          <div className="flex flex-col-3 mt-8">
            <div className="p-5 border-1 border-zinc-400 h-[30vh]">
                <h1 className="pt-10 pl-10 text-sm font-bold">Quality Assurance:</h1>
                <p className="pl-10 mt-4 text-sm text-zinc-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div className="p-5 border-1 border-zinc-400 h-[30vh]">
                <h1 className="pt-10 pl-10 text-sm font-bold">Convenience:</h1>
                <p className="pl-10 mt-4 text-sm text-zinc-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div className="p-5 border-1 border-zinc-400 h-[30vh]">
                <h1 className="pt-10 pl-10 text-sm font-bold">Exceptional Customer Service:</h1>
                <p className="pl-10 mt-4 text-sm text-zinc-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>

       <Subscribe/>
       <Footer/>
      </div>
    </div>
  );
};

export default About;
