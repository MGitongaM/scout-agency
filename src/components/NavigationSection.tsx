import { navigationEntries } from "@/constData/homePage";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import CloudinaryImage from "./CloudinaryImage";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function NavigationSection() {
  return (
    <>
      <nav className="bg-black/95 backdrop-blur-lg text-white w-full px-4  z-10">
        <NavigationMenu className="">
          <NavigationMenuList className="w-screen flex justify-between md:justify-around px-8">
            <NavigationMenuItem>
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
            <div className="hidden md:flex items-center">
              <div className="w-[50vw] mx-auto flex justify-end gap-x-4 lg:gap-x-12 px-4">
                {navigationEntries.map((entry) => (
                  <NavigationMenuItem key={entry.id}>
                    <Link href={entry.link}>{entry.title}</Link>
                  </NavigationMenuItem>
                ))}
              </div>
              <NavigationMenuItem>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
              <SheetContent side='top'>
                <div className="flex flex-col justify gap-x-4">
                  {navigationEntries.map((entry) => (
                    <NavigationMenuItem key={entry.id}>
                      <Link href={entry.link}>{entry.title}</Link>
                    </NavigationMenuItem>
                  ))}
                </div>
                <NavigationMenuItem>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
