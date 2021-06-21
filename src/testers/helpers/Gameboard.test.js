import Gameboard from "../../helpers/Gameboard";

describe("basic gameboard creation test", () => {
  let newGameboard;
  beforeAll(() => {
    newGameboard = Gameboard();
    newGameboard.start();
  });
  test("create gameboard object", () => {
    expect(typeof newGameboard).toBe("object");
  });
  test("should create ships", () => {
    expect(newGameboard.ships.length).toBe(10);
  });
  test("should place ships in set x position", () => {
    newGameboard.placeShips(1, "1-7");
    expect(newGameboard.ships[1].location).toContain("1-7");
  });

  test("should place ships in set y position", () => {
    newGameboard.ships[9].orientation = "y";
    newGameboard.placeShips(9, "3-2");
    expect(newGameboard.ships[9].location).toContain("3-2");
    expect(newGameboard.ships[9].location).toContain("4-2");
    expect(newGameboard.ships[9].location).toContain("5-2");
    expect(newGameboard.ships[9].location).toContain("6-2");
  });

  test("should reject out of bounds location", () => {
    newGameboard.ships[7].orientation = "y";
    newGameboard.placeShips(7, "9-2");
    expect(newGameboard.ships[7].location).toHaveLength(0);
  });

  test("should send hits to ships", () => {
    const result = newGameboard.receiveAttack("4-2");
    expect(result).toBeTruthy();
  });

  test("should save missed attacks", () => {
    newGameboard.receiveAttack("9-2");
    expect(newGameboard.missedShots).toHaveLength(1);
  });

  test("check if ships are still standing", () => {
    expect(newGameboard.checkAllSunk()).toBeFalsy();
  });

  test("check if ships have sunk", () => {
    newGameboard.ships.forEach((ship) => (ship.sunk = true));
    expect(newGameboard.checkAllSunk()).toBeTruthy();
  });
});
