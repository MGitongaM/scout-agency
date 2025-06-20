import {
  navigationEntries,
  ourWorNavigationkEntries,
} from "@/constData/homePage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import CloudinaryImage from "./CloudinaryImage";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function NavigationSection() {
  return (
    <>
      <nav className=" bg-black/85 backdrop-blur-xl text-white w-full px-4  z-30">
        <NavigationMenu viewport={false} className="">
          <NavigationMenuList className="w-[95dvw]  flex justify-between md:justify-between px-8">
            <NavigationMenuItem className=" w-full">
              <Link href="/">
                <CloudinaryImage
                  src="scout_logo_b1mzxq"
                  height={400}
                  width={400}
                  alt="scout group agency logo"
                  className="object-contain w-48"
                />
              </Link>
            </NavigationMenuItem>
            <div className="hidden w-full md:flex items-center ">
              <div className="w-[50vw] mx-auto flex justify-end gap-x-4 lg:gap-x-12 px-4">
                {navigationEntries.map((entry) => (
                  <NavigationMenuItem key={entry.id}>
                    <Link href={entry.link}>{entry.title}</Link>
                  </NavigationMenuItem>
                ))}
              </div>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent mx-1 text-white">
                  Our Work
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-52 gap-4">
                    {ourWorNavigationkEntries[0].entries.map((entry) => (
                      <li key={entry.id} className="">
                        <NavigationMenuLink asChild>
                          <Link href={entry.link}>{entry.heading}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-scoutGreen1 hover:bg-green-700 hover:scale-110"
                >
                  Donate
                </Button>
              </NavigationMenuItem>
            </div>
            {/* mobile nav  */}
            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Menu size={48} className="" />
                </SheetTrigger>
                <SheetContent side="top">
                  <div className="flex flex-col justify gap-x-4">
                    {navigationEntries.map((entry) => (
                      <NavigationMenuItem key={entry.id}>
                        <Link href={entry.link}>{entry.title}</Link>
                      </NavigationMenuItem>
                    ))}
                  </div>
                  <NavigationMenuItem>
                    <Button
                      size="lg"
                      className="bg-scoutGreen1 hover:bg-green-700 hover:scale-110 transition duration-300"
                    >
                      Donate
                    </Button>
                  </NavigationMenuItem>
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
