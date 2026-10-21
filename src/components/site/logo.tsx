import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className="inline-flex shrink-0">
      <Image
        src="/images/logo.png"
        alt="J&L Construction"
        width={200}
        height={174}
        priority={priority}
        className={cn("h-14 w-auto md:h-16", className)}
      />
    </Link>
  );
}
