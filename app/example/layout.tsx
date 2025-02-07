import { Metadata } from "next";
// import Link from "next/link";

// import { cn } from "@/lib/utils";
// import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "./examples-nav";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { LogOut } from "lucide-react";
// import {
//   PageActions,
//   PageHeader,
//   PageHeaderDescription,
//   PageHeaderHeading,
// } from "@/components/page-header";
// import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>{children}</>
    // <div className="relative flex flex-col">
    //   <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
    //     <nav className="container mx-auto flex items-center justify-between gap-2">
    //       <div className="flex items-center gap-2">
    //         <Link
    //           href="/"
    //           className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
    //         >
    //           shadcn <span className="italic text-primary-500">styles</span>
    //         </Link>
    //       </div>
    //       <div className="flex items-center gap-6 text-sm">
    //         <Link href="/dashboard" className="text-muted-foreground">
    //           Dashboard
    //         </Link>
    //         <Link href="/dashboard" className="text-muted-foreground">
    //           Dashboard
    //         </Link>
    //       </div>
    //     </nav>
    //   </header>
    //   <div className="mx-auto flex max-w-screen-2xl px-4">
    //     <div className="min-h-screen w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
    //     <section className="grid h-full flex-1 gap-8 pb-24 pt-14 md:pb-40">
    //       <div className="space-y-4 *:border-y *:border-border/80">
    //         <Typography
    //           as="h1"
    //           variant="display-xl/medium"
    //           className="border-y px-4 tracking-tight"
    //         >
    //           shadcn ui <span className="italic">styles</span>
    //         </Typography>
    //         <Typography
    //           as="p"
    //           variant="lg/regular"
    //           className="px-4 text-muted-foreground"
    //         >
    //           A dashboard example built using the components.
    //         </Typography>
    //       </div>

    //       <div className="border-y border-border/80 px-4">
    //         <ExamplesNav />
    //       </div>

    //       <div className="mx-4 overflow-hidden rounded-[0.5rem] border border-y border-border/80 bg-background shadow">
    //         {children}
    //       </div>
    //     </section>
    //     <div className="min-h-screen w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
    //   </div>
    // </div>
  );
}
