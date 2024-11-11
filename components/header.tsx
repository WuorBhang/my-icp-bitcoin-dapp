"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Bitcoin, Wallet } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bitcoin className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              CryptoFund
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="/create" className="transition-colors hover:text-foreground/80">
              Start a Project
            </Link>
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Wallet className="h-5 w-5" />
            </Button>
            <ModeToggle />
            <Button>
              Connect Wallet
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}