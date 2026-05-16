"use client";   
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 

    const user = session?.user;
    console.log("Session Data:", user);
    
    const handleLogout = async () => {
      await authClient.signOut();
    }

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
          <li>
            <Link href="/add-destination">Add Destination</Link>
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
        { user ? 
        
        <> 
        <li>
          <Avatar>
        <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
        <Avatar.Fallback>{user?.name ? user.name.charAt(0) : 'U'}</Avatar.Fallback>
      </Avatar>
          </li>
        <li>
          <Button variant="danger" className={"rounded-none"} onClick={handleLogout}>
         
            Logout
        
          </Button>
          </li>
        </>
        :
        
        <> 
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
        </>}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
