import { LocalGasStationIcon, SpeedIcon, SettingsIcon } from "assets/icons";
import { RouterButton } from "components/components-index";
import { ICar } from "interfaces/car";
import React from "react";
import "./CarCard.css";

interface ICarCard extends ICar {}

const CarCard = ({
  image,
  name,
  mileage,
  gearType,
  dailyRent,
  monthlyRent,
  gas,
}: ICarCard) => {
  return (
    <div className="carCard">
      <div className="carCard__image">
        <img src={image} alt={name} className="carCard__image__file" />
      </div>
      <h3 className="carCard__name">{name}</h3>
      <div className="carCard__rent">
        <div className="carCard__rent__info carCard__rent__info__daily">
          ${dailyRent} <p className="carCard__rent__info__per">/Day</p>
        </div>
        <div className="carCard__rent__info__line" />
        <div className="carCard__rent__info carCard__rent__info__monthly">
          ${monthlyRent} <p className="carCard__rent__info__per">/Month</p>
        </div>
      </div>
      <div className="carCard__line" />
      <div className="carCard__features">
        <div className="carCard__features__option">
          <SpeedIcon />
          <h5>{mileage}</h5>
        </div>
        <div className="carCard__features__option">
          <SettingsIcon />
          <h5>{gearType}</h5>
        </div>
        <div className="carCard__features__option">
          <LocalGasStationIcon />
          <h5>{gas}</h5>
        </div>
      </div>
      <RouterButton theme="fill" url="/" title="Book Now" />
    </div>
  );
};

export default CarCard;
