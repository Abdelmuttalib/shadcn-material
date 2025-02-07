"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Book } from "lucide-react";

import {
  AccordionDemo,
  AlertDialogDemo,
  BreadcrumbDemo,
  CalendarDemo,
  ComboboxDemo,
  CommandDemo,
  ContextMenuDemo,
  DataTableDemo,
  DialogDemo,
  DrawerDemo,
  HoverCardDemo,
  InputDemo,
  InputOTPDemo,
  MenubarDemo,
  NavigationMenuDemo,
  PaginationDemo,
  PopoverDemo,
  SelectDemo,
  SheetDemo,
  SliderDemo,
  TableDemo,
  TabsDemo,
  TextareaDemo,
  ToggleDemo,
  ToggleGroupDemo,
  TooltipDemo,
} from "@/components/showcase";

export default function Showcase() {
  function renderButtonContent(size: string, variant: string) {
    switch (size) {
      case "icon":
        return <Book className="" />;
      case "icon-sm":
        return <Book className="" />;
      case "icon-lg":
        return <Book className="" />;
      default:
        return <>{variant}</>;
    }
  }

  return (
    <div className="min-h-screen p-4">
      <main className="flex flex-col gap-8 pb-96">
        <p className="text-foreground">Foreground</p>
        <p className="text-muted-foreground">Foreground muted</p>
        <div className="w-fit">
          <MenubarDemo />
        </div>
        <div>
          <BreadcrumbDemo />
        </div>
        <div className="flex flex-wrap gap-4">
          {["sm", "default", "lg", "icon", "icon-sm", "icon-lg"].map((size) => (
            <div key={size} className="flex flex-wrap gap-4">
              {[
                "default",
                "secondary",
                "outline",
                "destructive",
                "ghost",
                "link",
              ].map((variant) => (
                <Button
                  key={size + variant}
                  size={size as ButtonProps["size"]}
                  variant={variant as ButtonProps["variant"]}
                  className="capitalize"
                >
                  {renderButtonContent(size, variant)}
                  {/* {size === "icon" ? <Book className="" /> : <>{variant}</>}
                  {size === "icon-lg" ? <Book className="" /> : null}

                  {size === "icon-sm" ? <Book className="" /> : null} */}
                </Button>
              ))}
            </div>
          ))}
        </div>
        <div className="w-fit">
          <div className="flex flex-wrap gap-4">
            <SelectDemo />
            <div>
              <DialogDemo />
            </div>
            <div>
              <AlertDialogDemo />
            </div>
            <PopoverDemo />
            <ComboboxDemo />
            <DrawerDemo />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="flex flex-col gap-4 xl:col-span-2">
            <DataTableDemo />
            <PaginationDemo />
          </div>
          <div className="flex w-full flex-col gap-4">
            <TabsDemo />
            <div className="flex flex-wrap gap-4">
              <SelectDemo />
              <div>
                <DialogDemo />
              </div>
              <div>
                <AlertDialogDemo />
              </div>
              <div>
                <PopoverDemo />
              </div>
              <div>
                <ComboboxDemo />
              </div>
              <div>
                <DrawerDemo />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="flex gap-4">
            <div>
              <TableDemo />
            </div>
            <div>
              <CalendarDemo />
            </div>
            <div>
              <HoverCardDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <NavigationMenuDemo />
            </div>
            <div className="flex flex-col gap-4">
              <TextareaDemo />
              <InputDemo />
            </div>
            <div className="flex gap-4">
              <div>
                <SheetDemo />
              </div>
              <div>
                <TooltipDemo />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <ToggleDemo />
              </div>
              <div>
                <ToggleGroupDemo />
              </div>
            </div>
          </div>

          <div className="w-56">
            <SliderDemo />
          </div>

          <div>
            <CommandDemo />
          </div>
          <div className="flex flex-col gap-4">
            <ContextMenuDemo />
            <div>
              <InputOTPDemo />
            </div>
          </div>
          <AccordionDemo />
        </div>
      </main>
    </div>
  );
}
