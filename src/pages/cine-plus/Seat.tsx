import { FC } from "react";
import { SeatType } from "../../types/types";
import { DollarCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Seat: FC<{
  seat: SeatType;
  onClick: (showMovieId: number) => void;
  toolTip: string;
}> = ({ seat, onClick, toolTip }) => {
  return (
    <Tooltip title={toolTip}>
      <div
        onClick={() => onClick(seat.showMovieId)}
        className={`seat-box ${
          seat.available ? "seat-available" : "seat-reserved"
        }`}
      >
        <div className="seat-number">
          <span>{seat.number}</span>
        </div>
        <div className="seat-price">
          <span>
            <DollarCircleOutlined /> {seat.price}
          </span>
        </div>
      </div>
    </Tooltip>
  );
};

export default Seat;
