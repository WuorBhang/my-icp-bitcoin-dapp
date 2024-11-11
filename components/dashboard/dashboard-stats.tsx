import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "Most Active Project",
    value: "DeFi Lending Platform",
    change: "+12% this week",
  },
  {
    title: "Average Donation",
    value: "0.05 BTC",
    change: "+3% this month",
  },
  {
    title: "New Backers",
    value: "128",
    change: "+18% this week",
  },
];

export default function DashboardStats() {
  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between p-4 border rounded-lg"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
          <div className="text-sm text-green-500">{stat.change}</div>
        </div>
      ))}
    </div>
  );
}