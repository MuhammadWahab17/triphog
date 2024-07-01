import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Wellcome = () => {
  return (
    <div className="flex items-center justify-between bg-[#F4F7FF] pr-[30px]">
      <div className="laptop:grid laptop:grid-cols-[20%_auto] gap-5 laptop:items-center hidden bg-[#F4F7FF] laptop:px-[30px] laptop:pt-[8px]">
        <div className="bg-[#C8F7DC] h-[60px] w-[60px] rounded-full">
          <img
            className="h-[60px] w-[60px]"
            src="https://s3-alpha-sig.figma.com/img/098c/cde0/8799f08faa40145a018b2cf2c8d3c214?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMKvMK7zb6q9LLRxCLqaIL0-TihGBquH30NZEOn12o7Gc3l3FxtYxtoaPkGvC7ZX6Tt7JR1B9SRPwiIeACnat3kNpWZr1LQVuqH67D3Lx7zr3psO08xVlrNkT1ETUpfmyc~kdZPnAg3eLcVpS9qmFp4u7~O6G-AsPtyyt5yjHe5yXyQWPQAklJ6D4hGaOAhpN4HcA-7Kz~gm5ERwCAjiEwBdt0CQ~HiPjZvkhhxJIH1pbZLIDlmr22ZEz7P-JdQCBojybvIopFu3Td-sF3ge8U7rIyKnkmStxY0tRGjoblOabTGGBhz1bGztURxb77Xx44RwU~S0m1~dhHjPXL5REA__"
            alt="profile"
          />
        </div>
        <div>
          <h1 className="text-[16px] text-[#262626]">
            <b>Welcome Back</b>, Jenny Wilson👋
          </h1>
          <h3 className="text-[10px] text-[#26262657] font-[400]">
            Monthly Premium User
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-[80px]">
        <div className="flex text-[#959595]">
          <span className="text-lap_c font-[400]">Company Code: &nbsp;</span>
          <span className="text-lap_c font-[700] text-black">RWL1000</span>
        </div>
        <div className="flex float-right text-lap_e cursor-pointer">
          <IoNotificationsOutline />
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
