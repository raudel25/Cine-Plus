import { FC } from "react";
import { SeatType } from "../../types/types";
import { Col, Image, Modal, Row, Typography } from "antd";
import Seat from "./Seat";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export interface ShowMovieTypeShopProps {
  seats: SeatType[];
  open: boolean;
}

const ShowMovieShop: FC<ShowMovieTypeShopProps> = ({ seats, open }) => {
  return (
    <Modal
      open={open}
      title={
        <Row className="showMovieShop-tittle">
          <Col span={4}>
            <Image width={"60px"} height={"60px"} src={"./assets/movie.jpg"} />
          </Col>
          <Col span={16}>
            <div className="center-content mb-5">
              <Typography.Title>hola</Typography.Title>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      }
      width={"60vw"}
      okText={<ShoppingCartOutlined />}
      cancelText={<CloseOutlined />}
    >
      <div className="m-5 center-content">
        <Row gutter={[5, 5]}>
          {seats.map((seat) => (
            <Col span={2}>
              <Seat
                key={seat.number}
                seat={seat}
                toolTip="hola"
                onClick={(n: number) => {}}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Modal>
  );
};

export default ShowMovieShop;
