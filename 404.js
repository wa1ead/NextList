import Link from "next/link";

const Notfound = () => {
  return (
    <div className="not-found">
      <h1>OOOOOOPS...!</h1>
      <h2>THIS PAGE CANNOT BE FOUND.</h2>
      <p>
        GO TO THE {""}
        <Link href="/">
          <a>HOMEPAGE</a>
        </Link>
      </p>
    </div>
  );
};
export default Notfound;
