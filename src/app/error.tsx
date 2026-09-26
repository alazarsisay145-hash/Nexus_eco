"use client";

import Link from "next/link";
import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <p className="font-display text-sm font-bold tracking-widest text-muted-foreground uppercase">
          Something went wrong
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          We hit a temporary issue
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          Try the page again or head back to the homepage while we reconnect
          the experience.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset}>
            <RotateCcw aria-hidden="true" />
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
