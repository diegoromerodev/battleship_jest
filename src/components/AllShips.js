import React from "react";
import ShipBlock from "./ShipBlock";

const AllShips = (props) => {
  const {
    game,
    turn,
    setting,
    rotate,
    mode,
    setAwayShipLocations,
    setHomeShipLocations,
  } = props;
  return (
    <>
      {game?.gameboardHome?.ships.map((ship, index) => (
        <ShipBlock
          key={"p-1-ships-" + index}
          mode={mode}
          turn={turn}
          player={game?.playerOne}
          setting={setting}
          rotate={rotate}
          number={index}
          length={ship?.length}
          location={ship?.location}
          isSunk={ship.isSunk}
          orientation={ship?.orientation}
          setShipLocations={setHomeShipLocations}
          placeShips={game.gameboardHome.placeShips}
        />
      ))}
      {game?.gameboardAway?.ships.map((ship, index) => (
        <ShipBlock
          key={"p-2-ships-" + index}
          mode={mode}
          turn={turn}
          player={game?.playerTwo}
          setting={setting}
          rotate={rotate}
          number={index}
          length={ship?.length}
          location={ship?.location}
          isSunk={ship.isSunk}
          orientation={ship?.orientation}
          setShipLocations={setAwayShipLocations}
          placeShips={game.gameboardAway.placeShips}
        />
      ))}
    </>
  );
};

export default AllShips;
