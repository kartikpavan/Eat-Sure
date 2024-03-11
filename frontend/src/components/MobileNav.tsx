import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
   return (
      <Sheet>
         <SheetTrigger>
            <User className="text-green-500" />
         </SheetTrigger>
         <SheetContent className="space-y-4">
            <SheetTitle className="font-semibold text-lg">
               Welcome to <span className="text-green-500">EatSure</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex flex-col ">
               <Button className="flex-1 font-bold bg-green-500">Login</Button>
            </SheetDescription>
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;
