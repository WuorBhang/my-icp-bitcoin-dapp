"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan", btc: 0.5 },
  { date: "Feb", btc: 0.8 },
  { date: "Mar", btc: 1.2 },
  { date: "Apr", btc: 1.5 },
  { date: "May", btc: 1.8 },
  { date: "Jun", btc: 2.2 },
  { date: "Jul", btc: 2.5 },
];

export default function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} BTC`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="btc"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}