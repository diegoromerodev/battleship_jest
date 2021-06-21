import Ship from "./Ship";

const Gameboard = () => {
  const ships = [];
  const missedShots = [];
  const start = () => {
    for (let i = 1; i < 5; i++) {
      for (let j = 5 - i; j > 0; j--) {
        ships.push(Ship(i));
      }
    }
  };

  const placeShips = (shipNum, startCoord, newOrientation) => {
    if (!startCoord) return false;
    const oldOrientation = ships[shipNum].orientation;
    if (newOrientation) ships[shipNum].orientation = newOrientation;
    ships[shipNum].location = [];
    const newLocations = [];
    const { length } = ships[shipNum];

    let [row, column] = startCoord.split("-");
    for (let i = 0; i < length; i++) {
      if (ships[shipNum].orientation === "x") {
        newLocations.push(`${row}-${column}`);
        column = Number(column) + 1;
        if (column > 10) {
          ships[shipNum].orientation = oldOrientation;
          return false;
        }
      } else {
        newLocations.push(`${row}-${column}`);
        row = Number(row) + 1;
        if (row > 10) {
          ships[shipNum].orientation = oldOrientation;
          return false;
        }
      }
    }

    // Check if coordinate is already picked by other ships

    for (const ship of ships) {
      for (const coord of newLocations) {
        if (ship.location.includes(coord)) {
          ships[shipNum].orientation = oldOrientation;
          return false;
        }
      }
    }

    ships[shipNum].location.push(...newLocations);
    return true;
  };

  const receiveAttack = (coords) => {
    let shipPos;
    let result;
    const shipIndex = ships.findIndex((ship) => {
      if (ship.location.includes(coords)) {
        shipPos = ship.location.indexOf(coords);
        return true;
      }

      return false;
    });
    if (shipPos < 0 || shipIndex < 0) result = false;
    else {
      ships[shipIndex].hit(shipPos);
      result = true;
    }

    if (!result && !missedShots.includes(coords)) missedShots.push(coords);
    return result;
  };

  const checkAllSunk = () => {
    return ships.every((ship) => {
      console.log(ship, ship.isSunk());
      return ship.isSunk();
    });
  };

  return { ships, missedShots, start, placeShips, receiveAttack, checkAllSunk };
};

export default Gameboard;
