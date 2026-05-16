"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {
    const {data: session} = authClient.useSession();
    const user = session?.user;


  const [departureDate, setDepartureDate] = useState(null);
  const { price, _id, destinationName,imageUrl, country} = destination;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate)
      
    }
    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookingData)
    })
    const data = await res.json()
    console.log(data, "booking response");
  }
  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h3 className="text-2xl font-bold text-emerald-600">${price}</h3>
      <p className="text-sm text-muted">per person</p>
      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button onClick={handleBooking} className={"w-full rounded-none"}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
