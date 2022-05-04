import {
  faBox,
  faClockRotateLeft,
  faMoneyBillWave,
  faMotorcycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeliverInfo = () => {
  return (
    <div className="text-2xl flex items-center justify-around p-14 mx-5 rounded shadow-lg">
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          className="text-5xl text-sky-700"
          icon={faMotorcycle}
        />

        <h1 className=" tracking-wide">
          Curb-side <br />
          pickup
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon className="text-5xl text-neutral-400" icon={faBox} />

        <h1 className=" tracking-wide">
          Free Shopping on <br /> orders over $50
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          className="text-5xl text-emerald-700"
          icon={faMoneyBillWave}
        />

        <h1 className=" tracking-wide">
          Low prices <br /> guaranteed
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          className="text-5xl text-yellow-500"
          icon={faClockRotateLeft}
        />

        <h1 className="tracking-wide">
          Available to <br />
          you 24/7
        </h1>
      </div>
    </div>
  );
};

export default DeliverInfo;
