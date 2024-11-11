import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Crowdfunding Powered by{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Bitcoin & ICP
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Launch your project with the power of blockchain. Secure, transparent, and borderless crowdfunding for the next generation.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/create">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full p-4 bg-blue-100 dark:bg-blue-900">
                <Bitcoin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Bitcoin Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Accept donations in Bitcoin with seamless ICP integration for secure transactions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full p-4 bg-green-100 dark:bg-green-900">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Secure & Transparent</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Built on ICP blockchain for maximum security and complete transparency.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full p-4 bg-purple-100 dark:bg-purple-900">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Global Community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect with backers worldwide and bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}