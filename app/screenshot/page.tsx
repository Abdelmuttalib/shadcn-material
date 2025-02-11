import {
  AccordionDemo,
  CommandDemo,
  DataTableDemo,
  InputOTPDemo,
  MenubarDemo,
  TabsDemo,
  ToggleGroupDemo,
} from "@/components/showcase";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { BookmarkIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="col-span-8 flex h-full w-full gap-2 overflow-hidden rounded-2xl border border-input bg-background">
      <div>
        <div className="flex gap-4 px-10 py-8">
          <div>
            {["default", "icon"].map((size) => {
              return (
                <div key={size} className="mb-4 flex flex-wrap gap-2">
                  {[
                    "default",
                    "secondary",
                    "outline",
                    "destructive",
                    "ghost",
                    "link",
                  ].map((variant) => {
                    return (
                      <Button
                        key={size + variant}
                        size={size as ButtonProps["size"]}
                        variant={variant as ButtonProps["variant"]}
                        className="capitalize"
                      >
                        {size === "icon" ? <BookmarkIcon /> : variant}
                      </Button>
                    );
                  })}
                </div>
              );
            })}
            {/* badges */}
            <div className="mb-4 flex flex-wrap gap-2">
              {["default", "secondary", "outline", "destructive"].map(
                (variant) => {
                  return (
                    <Badge
                      key={variant}
                      variant={variant as BadgeProps["variant"]}
                      className="capitalize"
                    >
                      Badge
                    </Badge>
                  );
                }
              )}
            </div>
            {/* Inputs */}
            <div className="mb-4 flex max-w-md flex-col flex-wrap gap-4">
              <Input placeholder="email@example.com" />
              <Input placeholder="Disabled" value={"John Doe"} disabled />
              <Textarea placeholder="Lorem ipsum dolor sit amet  consectetur adipisicing elit. Voluptatem, minima." />
              <div className="flex items-center justify-between gap-2">
                <Switch id="accept" />
                <Button variant="default" className="shadow-xs">
                  Submit
                </Button>
              </div>
            </div>

            {/* <div className="mb-4 flex flex-wrap gap-2 max-w-md">
                    <DialogDemo />
                    <PopoverDemo />
                    <AlertDialogDemo />
                    <DrawerDemo />
                  </div> */}
            <div className="mb-4 flex max-w-md flex-wrap gap-2">
              <MenubarDemo />
              <ToggleGroupDemo />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <DataTableDemo />
              {/* <CalendarDemo /> */}
            </div>
            <div>
              <TabsDemo />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-fit">
              <InputOTPDemo />
            </div>
            <div className="w-fit">
              <CommandDemo />
            </div>
            <div>
              <AccordionDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
