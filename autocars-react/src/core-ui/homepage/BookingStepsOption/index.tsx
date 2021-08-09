import React from "react";
import "./BookingStepsOption.css";

interface IBookingStepsOption {
  Icon: any;
  title: String;
  description: String;
}

const BookingStepsOption = ({
  Icon,
  title,
  description,
}: IBookingStepsOption) => {
  return (
    <div className="bookingStepsOption">
      <div className="bookingStepsOption__icon">
        <Icon style={{ fill: "var(--theme)" }} />
      </div>
      <div className="bookingStepsOption__details">
        <h5 className="bookingStepsOption__details__title">{title}</h5>
        <p className="bookingStepsOption__details__description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BookingStepsOption;
