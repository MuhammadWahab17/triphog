import React from "react";
import { Pie, PieChart } from "recharts";
import { GoDotFill } from "react-icons/go";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];
const TripsReportPieChart = () => {
  return (
    <div>
      <PieChart width={330} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#D98634
"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#096C86"
          label
        />
      </PieChart>
      <div>
        <div className="flex items-center justify-between my-[10px]">
          <div className="flex items-center gap-3">
            <GoDotFill className="text-lap_d text-[#096C86]" />
            <h4 className="text-lap_b ">Completed Trips</h4>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-lap_d text-[#D98634]" />
            <h4 className="text-lap_b ">On Route Trips</h4>
          </div>
        </div>
        <div className="flex items-center justify-between my-[10px]">
          <div className="flex items-center gap-3">
            <GoDotFill className="text-lap_d text-[#E42346]" />
            <h4 className="text-lap_b ">Completed Trips</h4>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-lap_d text-[#34C471]" />
            <h4 className="text-lap_b ">On Route Trips</h4>
          </div>
        </div>
        <div className="flex items-center justify-between my-[10px]">
          <div className="flex items-center gap-3">
            <GoDotFill className="text-lap_d text-[#7C828B]" />
            <h4 className="text-lap_b ">Completed Trips</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsReportPieChart;
