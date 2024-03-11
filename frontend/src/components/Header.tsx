import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
   return (
      <nav className="border-b shadow-sm py-6">
         <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl sm:text-3xl font-bold tracking-tight text-green-500">
               Eat-Sure
            </Link>
            <div>
               <MobileNav />
            </div>
         </div>
      </nav>
   );
};

export default Header;
