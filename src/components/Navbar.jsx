import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" py-4 px-15 border-b-2 border-gray-200">
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/my-bookings">My Bookings</Link>
          </li>
        </ul>
        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            height={150}
            width={150}
            alt="Wanderlast Logo"
          />
        </div>

        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
