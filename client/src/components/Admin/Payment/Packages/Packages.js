import React from "react";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import {
  MdCancel,
  MdElectricBolt,
  MdOutlineWorkspacePremium,
} from "react-icons/md";

const Packages = () => {
  return (
    <div className="bg-white rounded-[20px] p-[30px] mt-[20px] laptop:mr-[30px]">
      <h1 className="text-center text-lap_e font-[600] my-[5px]">
        Ready to Get Started?
      </h1>
      <h3 className="text-center text-[#534D59] text-lap_b mt-[10px] mb-[20px]">
        Choose a plan that suits your business needs
      </h3>
      <div className="flex mx-auto justify-center my-[20px]">
        <label class="inline-flex items-center cursor-pointer mx-auto justify-center">
          <span class="me-3 text-lap-c font-[600]">Monthly</span>
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 rounded-full    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-deepBlue"></div>
          <span class="ms-3 text-lap-c font-[600]">Yearly</span>
        </label>
      </div>
      <div className="flex mx-auto justify-center">
        <h3 className="bg-[#EBECFF] text-lap_b py-[5px] px-[12px] rounded-full font-[600]">
          Save 65%
        </h3>
      </div>
      <div className="grid grid-cols-3 justify-center my-[40px] gap-[5%] ">
        <div className="bg-[#EBECFF] rounded-lg p-[20px]">
          <div className="flex items-center text-lap_d gap-3 text-deepBlue font-[700]">
            <FaHeartCircleBolt />
            <h2>Monthly</h2>
          </div>
          <h2 className="text-[#596780] text-lap_b">
            Perfect plan to get started
          </h2>
          <div className="flex items-center my-[15px]">
            <span className="text-lap_f text-deepBlue font-[700]">$12</span>
            <span className="text-lap_b text-[#596780]">
              &nbsp;&nbsp;/month
            </span>
          </div>
          <h2 className="text-lap_b text-[#1A202C]">
            A free plan grants you access to some cool features of Spend In.
          </h2>
          <div className="my-[15px]">
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Sync accross device</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>5 workspace</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Collaborate with 5 user</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <MdCancel className="text-deepBlue text-lap_c" />
              <span className="text-[#596780]">Sharing permission</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <MdCancel className="text-deepBlue text-lap_c" />
              <span className="text-[#596780]">Admin tools</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <MdCancel className="text-deepBlue text-lap_c" />
              <span className="text-[#596780]">100+ integrations</span>
            </div>
          </div>
          <button className="flex bg-deepBlue text-white w-[100%] items-center justify-center py-[7px] rounded-lg text-lap_b">
            Get Your Free Plan
          </button>
        </div>
        <div className="bg-[#EBECFF] rounded-lg p-[20px] ">
          <div className="flex items-center text-lap_d gap-3 text-deepBlue font-[700] justify-between">
            <div className="items-center flex gap-3">
              <MdOutlineWorkspacePremium />
              <h2>Yearly</h2>
            </div>
            <button className="text-lap_b text-white bg-deepBlue float-right font-[400] py-[5px] px-[15px] rounded-lg">
              Popular
            </button>
          </div>
          <h2 className="text-[#596780] text-lap_b">
            Best suits for great company!
          </h2>
          <div className="flex items-center my-[15px]">
            <span className="text-lap_f text-deepBlue font-[700]">$33</span>
            <span className="text-lap_b text-[#596780]">
              &nbsp;&nbsp;/month
            </span>
          </div>
          <h2 className="text-lap_b text-[#1A202C]">
            If you a finance manager at big company, this plan is a perfect
            match.{" "}
          </h2>
          <div className="my-[15px]">
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Everything in Pro Plan</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Daily performance reports</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Dedicated assistant</span>
            </div>

            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Artificial intelligence</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Marketing tools & automations</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Advanced security</span>
            </div>
          </div>
          <button className="flex bg-deepBlue text-white w-[100%] items-center justify-center py-[7px] rounded-lg text-lap_b">
            Get Started
          </button>
        </div>
        <div className="bg-[#EBECFF] rounded-lg p-[20px]">
          <div className="flex items-center text-lap_d gap-3 text-deepBlue font-[700]">
            <MdElectricBolt />
            <h2>Lifetime</h2>
          </div>
          <h2 className="text-[#596780] text-lap_b">
            Best suits for great company!
          </h2>
          <div className="flex items-center my-[15px]">
            <span className="text-lap_f text-deepBlue font-[700]">$33</span>
            <span className="text-lap_b text-[#596780]">
              &nbsp;&nbsp;/month
            </span>
          </div>
          <h2 className="text-lap_b text-[#1A202C]">
            If you a finance manager at big company, this plan is a perfect
            match.{" "}
          </h2>
          <div className="my-[15px]">
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Everything in Pro Plan</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Daily performance reports</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Dedicated assistant</span>
            </div>

            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Artificial intelligence</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Marketing tools & automations</span>
            </div>
            <div className="flex items-center gap-2 text-lap_b my-[10px]">
              <IoCheckmarkCircleSharp className="text-[#9CD323] text-lap_c" />
              <span>Advanced security</span>
            </div>
          </div>
          <button className="flex bg-deepBlue text-white w-[100%] items-center justify-center py-[7px] rounded-lg text-lap_b">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
