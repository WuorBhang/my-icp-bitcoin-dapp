import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock data - will be replaced with actual API calls
const projects = [
  {
    id: 1,
    title: "Decentralized Social Network",
    description: "Building the next generation social platform on ICP",
    goal: 5,
    raised: 3.2,
    currency: "BTC",
    daysLeft: 15,
    backers: 128,
  },
  // Add more mock projects...
];

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discover Projects</h1>
          <p className="text-muted-foreground mt-2">
            Find and support innovative projects powered by blockchain technology
          </p>
        </div>
        <Link href="/create">
          <Button>Start a Project</Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">
                      {project.raised} {project.currency}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.goal} {project.currency}
                    </span>
                  </div>
                  <Progress value={(project.raised / project.goal) * 100} />
                </div>
                <div className="flex justify-between text-sm">
                  <span>{project.backers} backers</span>
                  <span>{project.daysLeft} days left</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Back this project</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}