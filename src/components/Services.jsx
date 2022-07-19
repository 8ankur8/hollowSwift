import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="w-150 flex flex-row justify-start items-start white-glassmorphism p-5 m-2 cursor-pointer ">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-6 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-3 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
      <ServiceCard
        color="bg-[#d46890]"
        title="Best exchange rates"
        icon={<BiSearchAlt fontSize={25} className="text-white" />}
        subtitle="Lowest gas fees on our crosschain exchanges through layerzero protocols "
      />
        <ServiceCard
          color="bg-[#1145ff]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={25} className="text-white" />}
          subtitle="We always maintain privacy and maintain the quality of our products"
        />
      
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="No waiting. We always maintain speed and quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;