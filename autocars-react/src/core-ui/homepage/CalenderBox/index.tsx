import { DateRangeIcon, PinDropIcon } from "assets/icons";
import { DatePickerBox, FunctionButton } from "components/components-index";
import React, { useState } from "react";
import "./CalenderBox.css";

const CalenderBox = () => {
  const [pickupDate, setPickupDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [daysRented, setDaysRented] = useState<Number>(0);
  const [showDate, setShowDate] = useState<Boolean>(false);

  const dateChange = (dates: any) => {
    // console.log(dates);

    const [pickupDate, returnDate] = dates;
    setPickupDate(pickupDate);
    setReturnDate(returnDate);
    if (pickupDate && returnDate) {
      const newReturnDate: any = new Date(returnDate);
      const newPickudDate: any = new Date(pickupDate);

      setDaysRented(
        Math.floor((newReturnDate - newPickudDate) / (24 * 60 * 60 * 1000) + 1)
      );

      // dispatch(
      //   getBookingSlot({
      //     roomId: router.query.id,
      //     checkInDate: checkInDate.toISOString(),
      //     checkOutDate: checkOutDate.toISOString(),
      //   })
      // );
    }
  };

  const reset = (e: any) => {
    e.preventDefault();
    setPickupDate(new Date());
    setReturnDate(new Date());
    setDaysRented(0);
  };

  const cancel = (e: any) => {
    e.preventDefault();
    setPickupDate(new Date());
    setReturnDate(new Date());
    setDaysRented(0);
    setShowDate(false);
  };
  return (
    <div className="calenderBox">
      <div className="calenderBox__container">
        <div className="calenderBox__container__location">
          <PinDropIcon style={{ fill: "var(--theme)" }} />{" "}
          <h5>Check Your Location</h5>
        </div>
        <div className="calenderBox__container__line" />
        <div className="calenderBox__container__date">
          <div
            className="calenderBox__container__date__option calenderBox__container__date__option__pickup"
            onClick={() => setShowDate(true)}
          >
            <DateRangeIcon style={{ fill: "var(--theme)" }} />
            {daysRented > 0 ? (
              <h5>{pickupDate?.toLocaleDateString()}</h5>
            ) : (
              <h5>Pickup Date</h5>
            )}
          </div>
          <div className="calenderBox__container__line" />
          <div
            className="calenderBox__container__date__option calenderBox__container__date__option__return"
            onClick={() => setShowDate(true)}
          >
            <DateRangeIcon style={{ fill: "var(--theme)" }} />
            {daysRented > 0 ? (
              <h5>{returnDate?.toLocaleDateString()}</h5>
            ) : (
              <h5>Return Date</h5>
            )}
          </div>
          {showDate && (
            <DatePickerBox
              startDate={pickupDate}
              setStartDate={setPickupDate}
              endDate={returnDate}
              onChange={dateChange}
              handleReset={reset}
              days={daysRented}
              handleCancel={cancel}
              handleConfirm={() => setShowDate(false)}
            />
          )}
        </div>
        <FunctionButton
          theme="fill"
          title="Book Your Ride"
          disabled={daysRented < 1 ? true : false}
        />
      </div>
    </div>
  );
};

export default CalenderBox;
