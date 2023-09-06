import Seat from "./Seat";

const CinePlusWeb = () => {
  return (
    <Seat
      seat={{ number: 1, price: 200.01, showMovieId: 1, available: false }}
      toolTip={"aaa"}
      onClick={(i: number) => {
        i++;
      }}
    />
  );
};

export default CinePlusWeb;
