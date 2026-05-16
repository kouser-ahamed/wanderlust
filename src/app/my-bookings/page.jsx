import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const res = await fetch(`http://localhost:5000/booking/${userId}`, {
    cache: "no-store",
  });

  const bookingsData = await res.json();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[32px] bg-black text-white p-8 md:p-14 mb-14">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-cyan-500/20" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="uppercase tracking-[7px] text-sm text-emerald-400 font-semibold">
                Wanderlust
              </p>

              <h1 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
                My Bookings
              </h1>

              <p className="text-gray-300 mt-5 max-w-2xl text-lg leading-relaxed">
                Track all your booked destinations and manage your upcoming
                travel experiences around the globe.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-8 py-6 rounded-3xl min-w-[240px]">
              <p className="text-sm uppercase tracking-[4px] text-gray-300">
                Total Bookings
              </p>

              <h2 className="text-6xl font-black mt-3">
                {bookingsData.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {bookingsData.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-[30px] py-28 text-center shadow-sm">
            <div className="max-w-xl mx-auto px-6">
              <h2 className="text-4xl font-black text-gray-900">
                No Bookings Yet
              </h2>

              <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                Start exploring beautiful destinations and book your next
                unforgettable adventure.
              </p>

              <Link
                href="/destinations"
                className="mt-8 inline-flex px-8 py-4 bg-black text-white rounded-full hover:bg-emerald-600 transition-all duration-300 font-medium"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {bookingsData.map((booking) => (
              <div
                key={booking._id}
                className="group bg-white rounded-[30px] overflow-hidden border border-gray-200 hover:border-emerald-500 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
              >
                <div className="flex flex-col xl:flex-row">
                  {/* Image */}
                  <div className="relative xl:w-[430px] overflow-hidden">
                    <Image
                      src={booking.imageUrl}
                      alt={booking.destinationName}
                      width={600}
                      height={500}
                      className="h-[320px] md:h-[420px] xl:h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Status */}
                    <div className="absolute top-5 left-5">
                      <div className="bg-emerald-500 text-white px-5 py-2 rounded-full text-xs uppercase tracking-[3px] font-semibold shadow-lg">
                        Confirmed
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h2 className="text-4xl font-black leading-tight">
                        {booking.destinationName}
                      </h2>

                      <p className="text-lg text-gray-200 mt-2">
                        {booking.country}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 md:p-10 flex flex-col justify-between">
                    <div>
                      {/* Top */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div>
                          <p className="uppercase tracking-[4px] text-sm text-gray-400 font-semibold">
                            Premium Tour Package
                          </p>

                          <h3 className="text-4xl font-black text-gray-900 mt-3">
                            {booking.destinationName}
                          </h3>

                          <p className="text-gray-500 mt-4 max-w-2xl leading-relaxed">
                            Enjoy a smooth and unforgettable travel experience
                            with your confirmed booking destination.
                          </p>
                        </div>

                        {/* Price Card */}
                        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 rounded-3xl px-8 py-6 min-w-[220px]">
                          <p className="text-sm uppercase tracking-[3px] text-emerald-700 font-semibold">
                            Booking Price
                          </p>

                          <h4 className="text-5xl font-black text-emerald-600 mt-3">
                            ${booking.price}
                          </h4>
                        </div>
                      </div>

                      {/* Info Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 hover:bg-white transition-all duration-300">
                          <p className="text-sm uppercase tracking-[3px] text-gray-400 font-medium">
                            Departure Date
                          </p>

                          <h5 className="text-xl font-black text-gray-900 mt-3 leading-snug">
                            {new Date(
                              booking.departureDate
                            ).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </h5>
                        </div>

                        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                          <p className="text-sm uppercase tracking-[3px] text-emerald-600 font-medium">
                            Booking Status
                          </p>

                          <h5 className="text-2xl font-black text-emerald-700 mt-3">
                            Confirmed
                          </h5>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 hover:bg-white transition-all duration-300">
                          <p className="text-sm uppercase tracking-[3px] text-gray-400 font-medium">
                            Destination
                          </p>

                          <h5 className="text-2xl font-black text-gray-900 mt-3">
                            {booking.country}
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-5">
                   <BookingCancelAlert bookingId={booking._id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;