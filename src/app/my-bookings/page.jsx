import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const res = await fetch(`http://localhost:5000/booking/${userId}`);
  const data = await res.json();

  console.log(data, "my bookings data user id");
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">My Bookings</h1>
    </div>
  );
};

export default MyBookingsPage;
