import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/download.png" width={128} height={77} />
      </div>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/lists">
        <a>PERSONS LISTING</a>
      </Link>
    </nav>
  );
};
export default Navbar;
