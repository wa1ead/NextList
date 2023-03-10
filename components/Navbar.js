import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>NextList</h1>
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
