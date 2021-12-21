import React from "react";

import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#018765", "#018786"];

const MyPieChart = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Total Sale Statistics:</h3>

      <div className="PieChart text-center">
        <div className="d-flex justify-content-around">
          <h3 style={{ color: COLORS[0] }}>Fiction</h3>
          <h3 style={{ color: COLORS[1] }}>Nonfiction</h3>
        </div>
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={props.data}
            cx={250}
            cy={200}
            outerRadius={200}
            // fill="#8884d8"
            label
          >
            {props.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};
export default MyPieChart;
