import { navigationEntries } from "@/constData/homePage";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import CloudinaryImage from "./CloudinaryImage";

export default function NavigationSection() {
  return (
    <>
      <nav className="bg-black/50 text-white w-full px-4 ">
        <NavigationMenu className="">
          <NavigationMenuList className="w-screen flex justify-around px-8">
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
            <div className="w-[50vw] mx-auto flex justify-evenly gap-x-4">
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
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
