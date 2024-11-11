import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "DeFi Lending Platform",
    description: "Decentralized lending using Bitcoin as collateral",
    raised: 1.2,
    goal: 2.0,
    status: "active",
    backers: 45,
  },
  {
    id: 2,
    title: "Cross-Chain Bridge",
    description: "Bridging Bitcoin to other blockchains via ICP",
    raised: 0.8,
    goal: 1.5,
    status: "active",
    backers: 32,
  },
  // Add more projects as needed
];

export default function ProjectList() {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </div>
            <Badge variant={project.status === "active" ? "default" : "secondary"}>
              {project.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>
                    {project.raised} BTC raised of {project.goal} BTC
                  </span>
                  <span>{((project.raised / project.goal) * 100).toFixed(1)}%</span>
                </div>
                <Progress value={(project.raised / project.goal) * 100} />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{project.backers} backers</span>
                <span>Updated 2h ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}