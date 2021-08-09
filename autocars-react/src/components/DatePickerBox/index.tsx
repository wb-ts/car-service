import { ReplayIcon } from "assets/icons";
import { FunctionButton } from "components/components-index";
import React, { MouseEventHandler } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerBox.css";

interface IDatePickerBox {
  days: Number;
  endDate: Date;
  handleCancel: Function;
  handleReset: MouseEventHandler<HTMLButtonElement>;
  onChange: Function;
  setStartDate: Function;
  startDate: Date;
  handleConfirm: any;
}

const DatePickerBox = ({
  startDate,
  endDate,
  onChange,
  handleReset,
  days,
  handleCancel,
  handleConfirm,
}: IDatePickerBox) => {
  return (
    <div className="datePickerbox">
      <DatePicker
        selected={startDate}
        onChange={(dates) => onChange(dates)}
        startDate={startDate}
        minDate={new Date()}
        endDate={endDate}
        // excludeDates={excludeDates}
        selectsRange
        inline
      />
      <div className="datePickerbox__available">
        <h5 className="datePickerbox__available__text">Dates Available</h5>
        <ReplayIcon
          style={{ cursor: "pointer" }}
          onClick={(e: any) => handleReset(e)}
        />
      </div>
      <div>
        <FunctionButton
          title="Confirm"
          theme="fill"
          disabled={days < 1 ? true : false}
          onClick={handleConfirm}
        />
        <FunctionButton
          title="Cancel"
          theme="outline"
          onClick={(e: any) => handleCancel(e)}
        />
      </div>
    </div>
  );
};

export default DatePickerBox;
