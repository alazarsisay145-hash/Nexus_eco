import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/brand/nexus-logo.svg"
        alt="NEXUS"
        width={196}
        height={38}
        className="h-9 w-auto sm:h-10"
      />
      <span className="sr-only">NEXUS home</span>
    </Link>
  );
}
