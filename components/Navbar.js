import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <Image src="/download.png" width={128} height={77} />
        </a>
      </div>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/users">
        <a>USERS LISTING</a>
      </Link>
    </nav>
  );
};
export default Navbar;
