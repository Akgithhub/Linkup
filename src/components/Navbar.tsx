import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between h-24">
      <div className="L">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          LinkUp
        </Link>
      </div>
      <div className="C table-columnhidden"></div>
      <div className="R ">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
