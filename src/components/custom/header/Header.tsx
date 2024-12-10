import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "მთავარი", href: "/#main" },
  { name: "ჩვენ შესახებ", href: "/#about" },
  { name: "სერვისები", href: "/#services" },
  { name: "კონტაქტი", href: "/#contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                BR Detailing
              </h3>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <p
                      key={item.name}
                      //   href={item.href}
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </p>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
