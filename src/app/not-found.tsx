import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <p className="font-display text-sm font-bold tracking-widest text-muted-foreground uppercase">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          The page you&apos;re looking for may have been moved or removed.
          Let&apos;s get you back to the ecosystem.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            Back to home
          </Link>
        </Button>
      </Container>
    </section>
  );
}
