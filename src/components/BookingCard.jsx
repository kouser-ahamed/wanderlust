"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {
    const {data: session} = authClient.userSessionn
  const [departureDate, setDepartureDate] = useState(null);
  console.log(new Date(departureDate))
  const { price } = destination;
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
      <Button className={"w-full rounded-none"}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
