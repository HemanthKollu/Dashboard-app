import React from "react";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const ordersData = [
    {
      name: "6/30/2024 - 7/6/2024",
      orders: 4,
      sales: 1404,
      avgOrderValue: 351,
    },
    { name: "7/7/2024 - 7/13/2024", orders: 2, sales: 800, avgOrderValue: 351 },
    {
      name: "7/21/2024 - 7/27/2024",
      orders: 1,
      sales: 35,
      avgOrderValue: 351,
    },
  ];

  const pieData = [
    { name: "WooCommerce Store", value: 44.2 },
    { name: "Shopify Store", value: 55.8 },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ["#00C49F", "#FF8042"];
  return (
    <div className="dashboard-container">
      <div className="header-container">
        <button type="button" className="head">
          Dashboard
        </button>
      </div>
      <div className="chart-container">
        <div className="line-container">
          <h2 className="line-chart-head">Sales vs Orders</h2>
          <LineChart
            width={700}
            height={300}
            data={ordersData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize="12px" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="orders"
              stroke="#ff7300"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sales"
              stroke="#00C49F"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="pie-container">
          <h2>Portion of Sales</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="name-container">
            <div className="color-name-container">
              <p className="dot">&bull;</p>
              <p>WooCommerce Store</p>
            </div>
            <div className="color-name-container">
              <p className="dot2">&bull;</p>
              <p>Shopify Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
