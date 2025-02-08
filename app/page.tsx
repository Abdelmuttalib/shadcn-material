import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const links = [
    "mail",
    "dashboard",
    "cards",
    "tasks",
    "playground",
    "forms",
    "music",
    "authentication",
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-roboto)]">
      <main className="container mx-auto flex flex-col gap-6 px-2 py-20">
        <h1 className="text-3xl tracking-tighter sm:text-4xl">
          shadcn Material Design
        </h1>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link}
              href={`/example/${link}`}
              className="flex items-center justify-center gap-2 rounded-md border border-border bg-accent px-2.5 py-1.5 shadow-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-md"
            >
              <span className="capitalize">{link}</span>
              <ArrowRightIcon className="h-4 w-4 -rotate-45 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
