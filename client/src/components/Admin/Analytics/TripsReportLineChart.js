import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    Month: 4000,
    Trips: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Month: 3000,
    Trips: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Month: 2000,
    Trips: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Month: 2780,
    Trips: 3908,
    amt: 2000,
  },
];

const TripsReportLineChart = () => {
  return (
    <div>
      <ResponsiveContainer height={350} width={"100%"}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodColor="#00000"
              />
            </filter>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="Month"
            stroke="#D98634"
            strokeWidth={2}
            dot={{ strokeWidth: 2, r: 4 }} // Adjust dot properties
            filter="url(#shadow)"
          />
          <Line
            type="monotone"
            dataKey="Trips"
            stroke="#096C86"
            strokeWidth={2}
            dot={{ strokeWidth: 2, r: 4 }} // Adjust dot properties
            filter="url(#shadow)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TripsReportLineChart;
