import React from "react";

const Wellcome = () => {
  return (
    <div className="laptop:grid laptop:grid-cols-[8%_auto] laptop:items-center hidden bg-[#F4F7FF] laptop:px-[30px] laptop:pt-[8px]">
      <div className="bg-[#C8F7DC] h-[60px] w-[60px] rounded-full">
        <img
          className="h-[60px] w-[60px]"
          src="https://s3-alpha-sig.figma.com/img/098c/cde0/8799f08faa40145a018b2cf2c8d3c214?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMKvMK7zb6q9LLRxCLqaIL0-TihGBquH30NZEOn12o7Gc3l3FxtYxtoaPkGvC7ZX6Tt7JR1B9SRPwiIeACnat3kNpWZr1LQVuqH67D3Lx7zr3psO08xVlrNkT1ETUpfmyc~kdZPnAg3eLcVpS9qmFp4u7~O6G-AsPtyyt5yjHe5yXyQWPQAklJ6D4hGaOAhpN4HcA-7Kz~gm5ERwCAjiEwBdt0CQ~HiPjZvkhhxJIH1pbZLIDlmr22ZEz7P-JdQCBojybvIopFu3Td-sF3ge8U7rIyKnkmStxY0tRGjoblOabTGGBhz1bGztURxb77Xx44RwU~S0m1~dhHjPXL5REA__"
          alt="profile"
        />
      </div>
      <div>
        <h1 className="text-[16px] text-[#262626]">
          <b>Welcome Back</b>, Jenny Wilson👋{" "}
        </h1>
        <h3 className="text-[10px] text-[#26262657] font-[400]">Super Admin</h3>
      </div>
    </div>
  );
};

export default Wellcome;
