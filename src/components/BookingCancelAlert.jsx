"use client";

import {AlertDialog, Button} from "@heroui/react";

export function BookingCancelAlert({bookingId}) {
  const handleCancelBooking = async () => {
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    window.location.reload();
    };
  
  return (

    <AlertDialog>
<Button
  className="
    px-8 py-4 rounded-full font-semibold
    border border-red-400 text-red-500 bg-white
    transition-all duration-300

    hover:bg-red-500 hover:text-white hover:border-red-500
    hover:shadow-lg hover:shadow-red-500/20

    active:scale-[0.98]
    !group-none
  "
>
  Cancel Booking
</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel your booking and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Exit
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button> 
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}