import { MyLocationIcon, DateRangeIcon, DirectionsCarIcon } from "assets/icons";
import React from "react";
import BookingStepsOption from "../BookingStepsOption";
import "./BookingSteps.css";
const BookingSteps = () => {
  return (
    <div className="bookingSteps">
      <div className="bookingSteps__title">
        <h3 className="bookingSteps__title__text">How To Book Your Ride</h3>
      </div>
      <div className="bookingSteps__steps">
        <BookingStepsOption
          Icon={MyLocationIcon}
          title="Choose Location"
          description="Find the nearest Autocars point and book your car."
        />
        <BookingStepsOption
          Icon={DateRangeIcon}
          title="Pickup Date"
          description="Pickup a date to rent your favourite ride."
        />
        <BookingStepsOption
          Icon={DirectionsCarIcon}
          title="Book Your Car"
          description="Book you car in easy and smooth steps with one click."
        />
      </div>
    </div>
  );
};

export default BookingSteps;
